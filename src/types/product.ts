
export type Platform = "amazon" | "flipkart" | "ebay";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  shipping: number;
  tax: number;
  platform: Platform;
  url: string;
  image: string;
}
