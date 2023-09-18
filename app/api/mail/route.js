import sendEmail from "@/actions/sendEmail"

export async function POST(request) {
	try {
		const errors = []
		const { fullName, email, message } = await request.json()

		if (errors.length > 0) {
			return new Response(JSON.stringify(errors), { status: 403 })
		}

		await sendEmail(
			email,
			process.env.EMAIL_SEND,
			`HLINOTEKA.CZ - Nová zpráva od ${fullName} (${email})`,
			`<p>${message}</p>`
		)

		return new Response(JSON.stringify({ status: "success" }), { status: 200 })
	} catch (e) {
		return new Response(JSON.stringify({ status: "fail" }), {
			status: 500,
		})
	}
}