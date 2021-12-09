<?php

require_once('../../shopify/get_products.php');


$product = get_products();
echo json_encode($product);
