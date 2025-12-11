// app/api/revalidate/route.js
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  // 1. Get the secret from the webhook
  const secret = request.headers.get('x-prismic-webhook-secret');
  
  // 2. Verify it matches your environment variable
  if (secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
    return NextResponse.json(
      { message: 'Invalid webhook secret' },
      { status: 401 }
    );
  }
  
  // 3. Only if valid, revalidate the cache
  revalidateTag("prismic");
  
  return NextResponse.json({ 
    revalidated: true, 
    now: Date.now() 
  });
}