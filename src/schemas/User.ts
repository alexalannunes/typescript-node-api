import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  fullName(): string;
}

const userSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

userSchema.methods.fullName = function (): string {
  return this.firstName + " " + this.lastName;
};

export default model<IUser>("user", userSchema);
