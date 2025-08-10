import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import AdminUser from '../models/AdminUser';
import dotenv from 'dotenv';
dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI as string);
  const existing = await AdminUser.findOne({ email: 'admin@videocrew.com' });
  if (existing) {
    console.log('Admin already exists');
    process.exit(0);
  }
  const hashed = await bcrypt.hash('Test@123', 10);
  const admin = new AdminUser({ email: 'admin@videocrew.com', password: hashed, name: 'Admin User' });
  await admin.save();
  console.log('Admin created');
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
