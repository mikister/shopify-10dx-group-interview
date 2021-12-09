<?php

function get_endpoint($resource)
{
    return
        "https://" . getenv("SHOPIFY_API_KEY")
        . ":" . getenv("SHOPIFY_API_PASS")
        . "@" . getenv("SHOPIFY_API_HOST")
        . "/admin/api/" . getenv("SHOPIFY_API_VERSION")
        . "/" . $resource . ".json ";
}
