import { Document, Schema, Types, model } from "mongoose";

interface iUser {
  companyName: string;
  email: string;
  password: string;
  staff: Array<{}>;
  project: Array<{}>;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    companyName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    staff: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],

    project: [
      {
        type: Types.ObjectId,
        ref: "projects",
      },
    ],
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
