export type LoginData = {
  email: string;
  password: string;
};

export type LoginResult = {
  token: string;
  userId: string;
};

export type  FormValues = {
  name?: string;
  email: string;
  password: string;
}