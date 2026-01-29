import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Log the data to Vercel Console (This is how you will see submissions for now)
    console.log("--------------------------------");
    console.log("📝 NEW FORM SUBMISSION RECEIVED");
    console.log("Type:", body.formType);
    console.log("Data:", JSON.stringify(body, null, 2));
    console.log("--------------------------------");

    // Return success to the frontend so the "Success" alert shows up
    return NextResponse.json(
      { message: 'Submission successful', id: Date.now() },
      { status: 200 }
    );

  } catch (error) {
    console.error('Submission Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}