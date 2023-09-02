import { Product } from '@/models/product'
import { mongooseConnect } from "@/lib/mongoose"

export async function GET(request) {
  await mongooseConnect();
  const url = new URL(request.url);
  const sortBy = url.searchParams.get('sortBy');
  let products;

  if (sortBy === 'author') {
    products = await Product.find().sort({ author: 1 }).exec();
  } else {
    products = await Product.find();
  }

  return new Response(JSON.stringify(products));
}