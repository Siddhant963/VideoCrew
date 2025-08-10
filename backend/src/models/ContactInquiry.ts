import mongoose, { Schema, Document } from 'mongoose';

export type ContactStatus = 'new' | 'processing' | 'completed';

export interface IContactInquiry extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  adminNotes?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

const ContactInquirySchema: Schema<IContactInquiry> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['new', 'processing', 'completed'],
      default: 'new'
    },
    adminNotes: { type: String },
    deletedAt: { type: Date, default: null }
  },
  { timestamps: true }
);

export default mongoose.model<IContactInquiry>('ContactInquiry', ContactInquirySchema);
