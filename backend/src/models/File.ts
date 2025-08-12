import mongoose, { Document, Schema } from 'mongoose';

export interface IFile extends Document {
  url: string;
  publicId: string;
  uploadedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
}

const fileSchema = new Schema<IFile>({
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IFile>('File', fileSchema);
