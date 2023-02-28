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

export interface My{
  title:string
}

export interface DataBasket{
  date: string;
  id: number;
  products:[{
    productId: number;
    quantity: number;
  }];
  userId:number;
  __v:number;
}
export interface Products{
  productId:number;
  quantity:number;
}
export interface Categories{
  title:string;
  image:string;
}
