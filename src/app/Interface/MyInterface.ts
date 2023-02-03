export interface DataArray{
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number,
    rate: number
  }
  title: string;
  id: number;
}

export interface Users{
  address: object;
  email: string;
  id:number;
  name: {
    firstname:string,
    lastname:string
  }
  password: string;
  phone: string;
  username: string;
  __v: number;
}
