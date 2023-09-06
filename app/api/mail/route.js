import sendEmail from "@/actions/sendEmail";
//Connect with database
export async function POST(request) {
	try {
		const errors = [];
		const { title, description, email, fullName } = await request.json();
		// If are errors
		if (errors.length > 0) {
			return new Response(JSON.stringify(errors), { status: 403 });
		}

		const message = `
      <h3>Съобщение от ${fullName}, с и-мейл ${email} - ${title}</h3>
      <p>${description}</p>
      `;
		// Sending email
		await sendEmail(
			process.env.EMAIL_SEND,
			process.env.EMAIL_SEND,
			"Им",
			message
		);
		// Успешно изпратено съобщение!

		return new Response(JSON.stringify({ message: "Успешно изпратено!" }));
	} catch (e) {
		console.log(e);
		await response.json({ error: e.message });
	}
}