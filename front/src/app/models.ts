export class Category {
    id: number;
    name: string;
    pict:string;
  }
  export class Product{
    id:number;
    name:string;
    description:string;
    price:string;
    pict:string;
    rating:number;
    category:string;
    authors:string;
  }
  export class Authors{
    id: number;
    name: string;
    pict:string;
  }
  
  export class LoginResponse {
    token: string;
  }