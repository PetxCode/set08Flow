import { Document, Schema, Types, model } from "mongoose";

interface iStaff {
  staffName: string;
  email: string;
  password: string;
  avatar: string;
  user: {};
}

interface iStaffData extends iStaff, Document {}

const staffModel = new Schema<iStaffData>(
  {
    staffName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    avatar: {
      type: String,
    },

    user: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default model<iStaffData>("staffs", staffModel);
