<?php
declare(strict_types=1); //php 7

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProductPhoto extends Model
{
    const BASE_PATH = 'app/public';
    const DIR_PRODUCTS = 'products';
    const PRODUCTS_PATH = self::BASE_PATH. '/' . self::DIR_PRODUCTS;


    protected $fillable = ['file_name', 'product_id'];

    public static function photosPath($productid){
        $path = self::PRODUCTS_PATH;
        return storage_path("{$path}/{$productid}");
    }

    public static function createWithPhotosFiles(int $productid,array $files ): Collection{
        try{
            \DB::beginTransaction();
            self::uploadFiles($productid, $files);
            $photos = self::createPhotosModels($productid, $files);
            \DB::commit();
            return new Collection($photos);
        }catch (\Exception $e){
            \DB::rollBack();
            self::deleteFiles($productid, $files);
            throw $e;
        }
    }

    public function updateWithPhotoFile(UploadedFile $file ): ProductPhoto{
        try{
            self::uploadFiles($this->product_id, [$file]);
            \DB::beginTransaction();
            $this->deletePhoto($this->file_name);
            $this->file_name = $file->hashName();
            $this->save();
            \DB::commit();
            return $this;
        }catch (\Exception $e){
            \DB::rollBack();
            self::deleteFiles($this->product_id, [$file]);
            throw $e;
        }
    }

    public function deleteWithPhotoFile(): bool {
        try{
            \DB::beginTransaction();
            $this->deletePhoto($this->file_name);
            $result = $this->delete();
            \DB::commit();
            return $result;
        }catch (\Exception $e){
            \DB::rollBack();
            throw $e;
        }
    }

    private function deletePhoto($fileName){
        $dir = self::photosDir($this->product_id);
        \Storage::disk('public')->delete("{$dir}/{$fileName}");
    }

    private static function deleteFiles($productid, array $files)
    {
        /** @var UploadedFile $file */
        foreach ($files as $file) {
            $path = self::photosPath($productid);
            $photospath = "{$path}/{$file->hashName()}";
            if (file_exists($photospath)){
                \File::delete($photospath);
            }
        }
    }

    public static function uploadFiles(int $productId, array $files)
    {
        $dir = self::photosDir($productId);
        //* @var UploadedFile $file */
        foreach ($files as $file) {
            $file->store($dir,['disk' => 'public']);
        }
    }

    private static function createPhotosModels(int $productid, array $files): array{
        $photos = [];
        /** @var UploadedFile $file */
        foreach ($files as $file){
            $photos[] = self::create([
               'file_name' => $file->hashName(),
               'product_id' => $productid
            ]);
        }
        return $photos;
    }

    public function getPhotoUrlAttribute(){
        $path = self::photosDir($this->product_id);
        return asset("storage/{$path}/{$this->file_name}");
    }

    public static function photosDir($productid){
        $dir = self::DIR_PRODUCTS;
        return "{$dir}/{$productid}";
    }



    public function product(){
        return $this->belongsTo(Product::class)->withTrashed();
    }
}
