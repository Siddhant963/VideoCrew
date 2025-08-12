import mongoose from "mongoose";

const contactInquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["new", "processing", "completed"],
      default: "new",
    },
    admin_notes: {
      type: String,
    },
  },
  {
    timestamps: true, // automatically creates createdAt & updatedAt
  }
);

export default mongoose.model("ContactInquiry", contactInquirySchema);
