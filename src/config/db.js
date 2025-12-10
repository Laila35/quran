import mongoose from 'mongoose';

// Global variable to track connection status
let isConnected = false;
let connectionPromise = null;

const connectDB = async () => {
  // Return existing connection if already connected
  if (isConnected && mongoose.connection.readyState >= 1) {
    console.log('✓ Already connected to MongoDB');
    return;
  }

  // Prevent multiple connection attempts
  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = (async () => {
    try {
      // Try multiple environment variable names
      const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.DATABASE_URL;

      console.log('🔍 Checking environment variables:');
      console.log('  - MONGO_URI:', process.env.MONGO_URI ? 'Set (' + process.env.MONGO_URI.length + ' chars)' : 'Not set');
      console.log('  - MONGODB_URI:', process.env.MONGODB_URI ? 'Set (' + process.env.MONGODB_URI.length + ' chars)' : 'Not set');
      console.log('  - DATABASE_URL:', process.env.DATABASE_URL ? 'Set (' + process.env.DATABASE_URL.length + ' chars)' : 'Not set');

      if (!mongoUri) {
        console.error('❌ CRITICAL: No MongoDB connection string found');
        console.error('   Please add to .env.local file:');
        console.error('   MONGO_URI=mongodb+srv://laila:laila%40%23123@cluster0.15sed.mongodb.net/ilmulquran');
        throw new Error('MONGO_URI is not defined in environment variables');
      }

      console.log('🔌 Attempting to connect to MongoDB...');
      console.log('   URI first 50 chars:', mongoUri.substring(0, 50) + '...');

      // FIX: Remove deprecated options - mongoose 6+ handles these automatically
      const connectionOptions = {
        serverSelectionTimeoutMS: 10000, // Increased to 10 seconds
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        minPoolSize: 5,
      };

      await mongoose.connect(mongoUri, connectionOptions);

      isConnected = true;
      console.log('✅ MongoDB connected successfully');
      console.log('   Database:', mongoose.connection.db.databaseName);
      console.log('   Host:', mongoose.connection.host);
      console.log('   Connection State:', mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected');
      
      // Handle connection events
      mongoose.connection.on('error', (err) => {
        console.error('❌ MongoDB connection error:', err);
        isConnected = false;
      });

      mongoose.connection.on('disconnected', () => {
        console.log('⚠️ MongoDB disconnected');
        isConnected = false;
      });

      mongoose.connection.on('reconnected', () => {
        console.log('✅ MongoDB reconnected');
        isConnected = true;
      });

      return mongoose.connection;
      
    } catch (error) {
      console.error('❌ Database connection failed:', error.message);
      console.error('   Error details:', error);
      console.error('   Please check:');
      console.error('   1. .env.local file exists and has correct connection string');
      console.error('   2. MongoDB Atlas cluster is running');
      console.error('   3. Network access allows your IP (0.0.0.0/0)');
      console.error('   4. Username/password are correct');
      
      // Reset connection promise on error
      connectionPromise = null;
      isConnected = false;
      
      throw new Error(`Database connection failed: ${error.message}`);
    }
  })();

  return connectionPromise;
};

// Optional: Add a helper function to check connection status
export const checkDBConnection = () => {
  return {
    isConnected: isConnected && mongoose.connection.readyState === 1,
    readyState: mongoose.connection.readyState,
    host: mongoose.connection.host,
    database: mongoose.connection.db?.databaseName
  };
};

export default connectDB;