import { endpoint } from "../util/endpoint";

export async function getAllProducts() {
  const data = await fetch(`${endpoint}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export async function getProductsById(id) {
  const data = await fetch(`${endpoint}/product/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
