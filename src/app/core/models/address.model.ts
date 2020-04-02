export const nameofFactory = <T>() => (name: keyof T) => name;

export const nameof = nameofFactory<IAddress>();

export interface Todo2 {
  userId: string;
  id:string;
  title:string;
  completed:string;
}

export interface IAddress {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string

  toDataString?(field?: string): string;

}

export class Address implements IAddress {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string


  constructor(addressLine1, addressLine2, city, state, zip) {
    this.addressLine1 = addressLine1
    this.addressLine2 = addressLine2
    this.city = city
    this.state = state
    this.zip = zip
  }

  toDataString?() {
    return ` ${this.addressLine1}, ${this.city}`;
  }
}
