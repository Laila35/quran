import { handleCourseFetch } from '@/controllers/coursecontroller'; // Note the lowercase 'C' and 'O'
import dbConnect from "@/config/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    console.log('🔍 Environment check:');
    console.log('  - MONGO_URI:', process.env.MONGO_URI ? `Set (${process.env.MONGO_URI.length} chars)` : 'Not set');
    console.log('  - MONGODB_URI:', process.env.MONGODB_URI ? `Set (${process.env.MONGODB_URI.length} chars)` : 'Not set');
    console.log('  - DATABASE_URL:', process.env.DATABASE_URL ? `Set (${process.env.DATABASE_URL.length} chars)` : 'Not set');
    console.log('  - NODE_ENV:', process.env.NODE_ENV);

    // Try multiple environment variable names
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.DATABASE_URL;
    
    if (!mongoUri) {
      console.error('❌ No MongoDB connection string found in environment variables');
      console.error('   Please set MONGO_URI, MONGODB_URI, or DATABASE_URL in .env.local');
      
      return NextResponse.json({ 
        message: "Using default courses (MongoDB not configured)",
        courses: [
          { COURSE_ID_PK: 1, COURSE_NAME: "Basic Quran Reading" },
          { COURSE_ID_PK: 2, COURSE_NAME: "Tajweed Course" },
          { COURSE_ID_PK: 3, COURSE_NAME: "Hifz Program" }
        ],
        debug: {
          envVariables: {
            MONGO_URI: process.env.MONGO_URI ? 'exists' : 'missing',
            MONGODB_URI: process.env.MONGODB_URI ? 'exists' : 'missing',
            DATABASE_URL: process.env.DATABASE_URL ? 'exists' : 'missing'
          }
        }
      });
    }

    console.log('🔌 Connecting to MongoDB...');
    console.log('   URI first 50 chars:', mongoUri.substring(0, 50) + '...');
    
    await dbConnect();
    return await handleCourseFetch(req);
    
  } catch (error) {
    console.error('❌ API Error:', error);
    
    // More detailed error for debugging
    const errorDetails = {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      mongoUriLength: (process.env.MONGO_URI || '').length,
      mongoUriStart: (process.env.MONGO_URI || '').substring(0, 30)
    };
    
    return NextResponse.json(
      { 
        message: "Database connection failed",
        error: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred',
        details: process.env.NODE_ENV === 'development' ? errorDetails : undefined,
        // Provide fallback courses
        courses: [
          { COURSE_ID_PK: 1, COURSE_NAME: "Basic Quran Reading", description: "Fallback course" },
          { COURSE_ID_PK: 2, COURSE_NAME: "Tajweed Course", description: "Fallback course" },
          { COURSE_ID_PK: 3, COURSE_NAME: "Hifz Program", description: "Fallback course" }
        ]
      },
      { status: 500 }
    );
  }
}