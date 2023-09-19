import { Tag } from '@/models/Tag'
import { mongooseConnect } from "@/lib/mongoose"

export const revalidate = 0

export async function GET(request) {
	await mongooseConnect()
	const tags = await Tag.find()
	return new Response(JSON.stringify(tags))
}
