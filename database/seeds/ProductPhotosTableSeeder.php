<?php
declare(strict_types=1);

use CodeShopping\Models\ProductPhoto;
use Illuminate\Database\Seeder;
use CodeShopping\Models\Product;
use Illuminate\Support\Collection;

class ProductPhotosTableSeeder extends Seeder
{

    /**
     * @var Collection
     */
    private $allFakerPhotos;
    private $fakerPhotosPath = 'app/faker/product_photos';

    public function run()
    {
        $this->allFakerPhotos = $this->getFakerPhotos();

        /** @var \Illuminate\Database\Eloquent\Collection $products */
        $products = Product::all();
        $this->deleteAllPhotosInProductsPath();
        $self = $this;
        $products->each(function ($product) use($self){
           $self->createPhotoDir($product);
           $self->createPhotosModels($product);
        });
    }

    private function getFakerPhotos(): Collection
    {
        $path = storage_path($this->fakerPhotosPath);
        return collect(\File::allFiles($path));
    }

    private function deleteAllPhotosInProductsPath(){
        $path = ProductPhoto::PRODUCTS_PATH;
        \File::deleteDirectory(storage_path($path), true);
    }

    private function createPhotoDir(Product $product){
        $path = ProductPhoto::photosPath($product->id);
        \File::makeDirectory($path, 0777 ,true);
    }

    private function createPhotosModels(Product $product)
    {
        foreach (range(1,5) as $v){
            $this->createPhotoModel($product);
        }
    }

    private function createPhotoModel(Product $product)
    {
        $photo = ProductPhoto::create([
            'product_id' => $product->id,
            'file_name' => 'imagem.jpg'
        ]);
        $this->generatePhoto($photo);
    }

    private function generatePhoto(ProductPhoto $photo){
        $photo->file_name = $this->uploadPhoto($photo->product_id);
        $photo->save();
    }

    private function uploadPhoto($productid): string {
        /** @var SplFileInfo $photofile */
        $photofile = $this->allFakerPhotos->random();
        $uploadFile = new \Illuminate\http\UploadedFile(
            $photofile->getRealPath(),
            str_random(16) . '.' . $photofile->getExtension()
        );
        //ProductPhoto::uploadFiles($productid, [$photofile]);
        //ProductPhoto::createWithPhotosFiles($productid, [$photofile]);
        ProductPhoto::uploadFiles($productid, [$uploadFile]);
        return $uploadFile->hashName();
    }

}
