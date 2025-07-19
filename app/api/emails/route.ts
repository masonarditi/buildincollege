import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'redis';

interface EmailSubmission {
  email: string;
  timestamp: string;
  resourceId?: string;
  resourceName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email, resourceId, resourceName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const submission: EmailSubmission = {
      email,
      timestamp: new Date().toISOString(),
      resourceId,
      resourceName,
    };

    // Save to Redis
    try {
      const redis = createClient({
        url: process.env.REDIS_URL
      });
      
      await redis.connect();
      
      const emailKey = `email:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
      await redis.set(emailKey, JSON.stringify(submission));
      
      // Also maintain a list of all email keys for easy retrieval
      await redis.lPush('email_keys', emailKey);
      
      await redis.disconnect();
      
      console.log('Email submission saved to Redis:', submission);
      
    } catch (storageError) {
      console.error('Error saving email to Redis:', storageError);
      // Still return success to user, but log the error
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email collected successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing email submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}