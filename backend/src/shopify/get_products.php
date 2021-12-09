<?php

require_once('get_endpoint.php');

function get_products()
{
    $endpoint = get_endpoint("products");
    $results = json_decode(file_get_contents($endpoint));

    $results->products = array_map('__map_products', $results->products);

    return $results;
}

function __map_products($product)
{
    $product_object = new stdClass;

    $product_object->id = $product->id;
    $product_object->title = $product->title;
    $product_object->description = $product->body_html;
    $product_object->handle = $product->handle;
    $product_object->price = $product->variants[0]->price;
    $product_object->image_url = $product->image->src;

    return $product_object;
}
