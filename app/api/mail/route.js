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

		return new Response(JSON.stringify({ message: "Email sent" }))
	} catch (e) {
		console.log(e)
		return new Response(JSON.stringify({ message: "Error sending email" }), {
			status: 500,
		})
	}
}