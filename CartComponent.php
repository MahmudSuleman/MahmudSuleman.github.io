<?php

namespace App\Http\Livewire;

use App\Models\Coupon;
use App\Models\Product;
use App\Models\SaveForLater;
use App\Models\Shoppingcart;
use Livewire\Component;

class CartComponent extends Component
{
    public $has_coupon_code;
    public $coupon_code;

    public $discount;
    public $total_after_discount;
    public $tax_after_discount;
    public $total_after_tax;


    public function increase(Shoppingcart $item)
    {
        $item->qty += 1;
        $item->subtotal = $item->price * $item->qty;

        $item->save();
    }

    public function reduce(Shoppingcart $item)
    {
        if ($item->qty > 0)
        {
            $item->qty -= 1;
            $item->subtotal = $item->price * $item->qty;

            $item->save();
        }
    }

    public function delete(Shoppingcart $item)
    {
        $item->delete();

        $this->emitTo('cart-count-component', 'refreshComponent');

        session()->flash('message', 'Item removed from cart successfully');
    }

    public function clearCart()
    {
        Shoppingcart::truncate();

        $this->emitTo('cart-count-component', 'refreshComponent');

        session()->flash('message', 'All items have been removed from cart');
    }

    public function saveForLater(Shoppingcart $product)
    {
        $saved = SaveForLater::where('product_id', $product->product_id)?->first();

        if (! $saved)
        {
            SaveForLater::create([
                'name' => $product->name,
                'price' => $product->price,
                'image' => $product->image,
                'product_id' => $product->product_id,
            ]);
        }

        $product->delete();

        session()->flash('message', 'Product saved for later');
    }

    public function moveToCart(SaveForLater $product)
    {
        $item = Shoppingcart::where('product_id', $product->product_id)?->first();

        if ($item)
        {
            $item->qty += 1;
            $item->subtotal = $item->subtotal * $item->qty;
        } else
        {
            Shoppingcart::create([
                'name' => $product->name,
                'price' => $product->price,
                'image' => $product->image,
                'product_id' => $product->product_id,
                'qty' => 1,
                'subtotal' => $product->price,
            ]);
        }

        $product->delete();

        $this->emitTo('cart-count-component', 'refreshComponent');

        session()->flash('message', 'Product moved to cart');
    }

    public function deleteSavedProduct($id)
    {
        SaveForLater::destroy($id);

        session()->flash('message', 'Product deleted from your saved products');
    }

    public function clearSaved()
    {
        SaveForLater::truncate();

        session()->flash('message', 'All products have been deleted from your list of saved products');
    }

    public function total()
    {
        $total = 0;

        foreach(Shoppingcart::all() as $cart)
        {
            $total += $cart->total;
        }

        return $total;
    }

    public function applyCoupon()
    {
        $total = $this->total();

        $coupon = Coupon::where('code', $this->coupon_code)->where('cart_value', '<=', $total)->first();

        if (! $coupon)
        {
            session()->flash('coupon_message', 'Coupon code is invaid!');
            // return;
        }

        session()->put('coupon', [
            'code' => $coupon->code,
            'type' => $coupon->type,
            'value' => $coupon->value,
            'cart_value' => $coupon->cart_value,
        ]);
    }

    public function calculateDiscount()
    {
        if (session('coupon')['type'] === 'fixed')
        {
            $this->discount = session('coupon')['value'];
        } else
        {
            $this->discount = $this->total() * session('coupon')['value'] / 100;
        }

        $this->total_after_discount = $this->total() - $this->discount;
    }

    public function render()
    {
        $cart = Shoppingcart::all();
        $saved = SaveForLater::all();

        $total = $this->total();

        $popular_products = Product::inRandomOrder()->get()->take(8);

        return view('livewire.cart-component', compact('cart', 'saved', 'total', 'popular_products'))->layout('layouts.base');
    }
}

