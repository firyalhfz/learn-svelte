import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';

export function GET() {
  //   return new Response(JSON.stringify(comments), {
  //     headers: { 'Content-Type': 'application/json' }
  //   });

  //its same code like above
  return json(comments);
}