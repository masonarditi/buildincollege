import { NextResponse } from 'next/server';
import { createClient } from 'redis';

interface EmailSubmission {
  email: string;
  timestamp: string;
  resourceId?: string;
  resourceName?: string;
}

export async function GET() {
  try {
    let emails: EmailSubmission[] = [];

    // Read from Redis
    try {
      const redis = createClient({
        url: process.env.REDIS_URL
      });
      
      await redis.connect();
      
      const emailKeys = await redis.lRange('email_keys', 0, -1);
      
      if (emailKeys && emailKeys.length > 0) {
        // Get all emails using the keys
        const emailPromises = emailKeys.map((key: string) => redis.get(key));
        const emailResults = await Promise.all(emailPromises);
        emails = emailResults
          .filter(Boolean)
          .map(result => JSON.parse(result as string)) as EmailSubmission[];
      }
      
      await redis.disconnect();
      
    } catch (redisError) {
      console.error('Error reading from Redis:', redisError);
    }

    // Sort by timestamp (newest first)
    emails.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json({
      success: true,
      count: emails.length,
      emails
    });

  } catch (error) {
    console.error('Error retrieving emails:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve emails' },
      { status: 500 }
    );
  }
}