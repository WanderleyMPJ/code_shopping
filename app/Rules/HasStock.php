<?php

namespace CodeShopping\Rules;

use CodeShopping\Models\Product;
use Illuminate\Contracts\Validation\Rule;

class HasStock implements Rule
{
    /**
     * @var Product
     */
    private $product;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(Product $product)
    {
        //
        $this->product = $product;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->product->stock - $value >= 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        $name = $this->product->name;
        return "O Produto $name não tem estoque suficiente";
    }
}
