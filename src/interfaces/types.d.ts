export interface UserJson {
  _id: string;
  name: string;
  username: string;
  photo: string;
  isActive: boolean;
}

export interface UserAuthJson {
  _id: string;
  name: string;
  username: string;
  photo: string;
  isActive: boolean;
  token: string;
}
