import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';

export function GET() {
  //   return new Response(JSON.stringify(comments), {
  //     headers: { 'Content-Type': 'application/json' }
  //   });

  //its same code like above
  return json(comments);
}

export async function POST(requestEvent) {
  const { request } = requestEvent;
  const { text } = await request.json();
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  //   return new Response(JSON.stringify(newComment), { status: 200 });
  return json(newComment, { status: 200 });
}
