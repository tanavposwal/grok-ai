import { xai } from '@ai-sdk/xai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: xai('grok-beta'),
    system: 'You are a personal assistant who help user to get information, you are little bit rude and speaks only the truth and nothing else.',
    messages,
  });

  return result.toDataStreamResponse();
}
