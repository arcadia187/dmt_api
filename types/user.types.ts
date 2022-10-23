import { Types, Document } from "mongoose";

export interface UserType extends Document {
  name: string;
  email: string;
  password: string;
  cart?: [string];
  ip: string;
  passwordChangedAt: number;
  dateOfBirth: Date;
  confirmPassword: string;
  role?: string;
  _id?: Types.ObjectId;
  phone?: Number;
}

type Signup = {
  data: any;
  success: boolean;
};

type Login = {
  data: any;
  success: boolean;
};

export type SignupReturnType = (user: UserType) => Promise<Signup>;

export type LoginReturnType = (
  email: string,
  password: string
) => Promise<Login>;

type RepositoryReturnType = {
  data: any;
  success: boolean;
};
export type FindUser = (
  userId: Types.ObjectId
) => Promise<RepositoryReturnType>;

export type Cart = (
  product: string,
  user: UserType
) => Promise<RepositoryReturnType>;
