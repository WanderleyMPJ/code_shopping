<?php

namespace CodeShopping\Models;

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

    public static function uploadFiles($productid, array $files){
        /** @var UploadedFile $file */
        $dir = self::photosDir($productid);
        foreach ($files as $file){
           $file->store($dir ,['disk' => 'public']);
       }
    }

    public function getPhotoUrlAttribute(){
        $path = self::photosDir($this->product_id);
        return asset("algumacoisa/{$path}/{$this->file_name}");
    }

    public static function photosDir($productid){
        $dir = self::DIR_PRODUCTS;
        return "{$dir}/{$productid}";
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
