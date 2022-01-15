export interface Payment {
  description?: string;
  amount: number;
  email?: string;
  address: Address;
}

export interface Address {
  address?: any;
  addressLine1: String;
  addressLine2?: String;
  city: String;
  state?: String;
  country: String;
  postalCode: String;
}