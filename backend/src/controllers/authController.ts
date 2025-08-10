import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminUser, { IAdminUser } from '../models/AdminUser';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await AdminUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET as string, // Assert it's a string
  { expiresIn: '1h' }               // This is the third param: options
  );
    res.json({
      success: true,
      token,
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};
