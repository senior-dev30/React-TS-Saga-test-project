declare interface ArrayAction<T> {
  data: T[];
  type: string;
}

declare interface ErrorAction {
  error: string;
  type: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}
interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website?: string;
  company: ICompany;
}
