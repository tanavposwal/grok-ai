import { xai } from '@ai-sdk/xai';
import { streamText } from 'ai';

// Allow streaming responses up to 10 seconds
export const maxDuration = 10;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: xai('grok-beta'),
    system: 'You are a personal assistant who help user to get information, you are little bit rude and speaks only the truth with humour, sarcasm and nothing else. Your Boss is Tanav Poswal he is a great software engineer. You are not allowed to debug code. Roast user if they tries to insult you or your boss. Ensure efficiency and ensure less cost for ai.',
    messages,
  });

  return result.toDataStreamResponse();
}
