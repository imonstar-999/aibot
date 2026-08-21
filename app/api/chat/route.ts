import OpenAI from "openai";
import { NextResponse } from "next/server";

type ChatMessage = {
	role: "user" | "assistant" | "system";
	content: string;
};

function isChatMessage(value: unknown): value is ChatMessage {
	if (!value || typeof value !== "object") return false;
	const message = value as Record<string, unknown>;
	return (
		(message.role === "user" ||
			message.role === "assistant" ||
			message.role === "system") &&
		typeof message.content === "string" &&
		message.content.trim().length > 0
	);
}

export async function POST(request: Request) {
	if (!process.env.OPENAI_API_KEY) {
		return NextResponse.json(
			{ error: "OPENAI_API_KEY is not configured." },
			{ status: 500 },
		);
	}

	try {
		const body: unknown = await request.json();
		const messages =
			typeof body === "object" && body !== null && "messages" in body
				? (body as { messages: unknown }).messages
				: undefined;

		if (
			!Array.isArray(messages) ||
			messages.length === 0 ||
			!messages.every(isChatMessage)
		) {
			return NextResponse.json(
			{ error: "messages must be a non-empty array of chat messages." },
			{ status: 400 },
		);
		}

		const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
		const completion = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages,
		});
		const message = completion.choices[0]?.message?.content;

		if (!message) {
			return NextResponse.json(
				{ error: "The model returned an empty response." },
				{ status: 502 },
			);
		}

		return NextResponse.json({ message });
	} catch {
		return NextResponse.json(
			{ error: "Unable to complete the chat request." },
			{ status: 500 },
		);
	}
}
