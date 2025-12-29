import mongoose from "mongoose";

// data model is created from a data schema
//ใส่เพื่อตรวจสอบข้อมูลก่อนนำข้อมูลเข้า
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6, select: false },
  },
  {
    timestamps: true,
  }
);

// mongobd will automatically create users collection

export const User = mongoose.model("User", userSchema);