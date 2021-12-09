export async function fetchProducts() {
  const res = await fetch("http://localhost:8000/api/v1/products.php");
  return await res.json();
}
