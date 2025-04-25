
import { Product } from "@/types/product";

// Mock product data
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 14 Pro (128GB) - Deep Purple",
    price: 999.00,
    originalPrice: 1099.00,
    shipping: 0,
    tax: 79.92,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra (256GB) - Phantom Black",
    price: 1199.99,
    originalPrice: 1299.99,
    shipping: 0,
    tax: 96.00,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "3",
    name: "Apple MacBook Air M2 (8GB, 256GB SSD) - Space Gray",
    price: 1099.00,
    originalPrice: 1199.00,
    shipping: 0,
    tax: 87.92,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "4",
    name: "Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver",
    price: 999.00,
    originalPrice: 1099.00,
    shipping: 0,
    tax: 79.92,
    platform: "flipkart",
    url: "https://www.flipkart.com",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Black",
    price: 349.99,
    originalPrice: 399.99,
    shipping: 0,
    tax: 28.00,
    platform: "flipkart",
    url: "https://www.flipkart.com",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "6",
    name: "Nintendo Switch OLED Model with White Joy-Con",
    price: 349.99,
    shipping: 4.99,
    tax: 28.00,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "7",
    name: "Apple Watch Series 8 (GPS, 45mm) - Midnight Aluminum Case",
    price: 429.00,
    originalPrice: 459.00,
    shipping: 0,
    tax: 34.32,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "8",
    name: "Bose QuietComfort 45 Bluetooth Wireless Headphones - White Smoke",
    price: 329.00,
    shipping: 0,
    tax: 26.32,
    platform: "ebay",
    url: "https://www.ebay.com",
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "9",
    name: "Canon EOS R6 Full-Frame Mirrorless Camera + RF24-105mm Lens",
    price: 2499.00,
    originalPrice: 2799.00,
    shipping: 0,
    tax: 199.92,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "10",
    name: "DJI Mini 3 Pro Drone with Remote Controller",
    price: 759.00,
    shipping: 0,
    tax: 60.72,
    platform: "flipkart",
    url: "https://www.flipkart.com",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "11",
    name: "PlayStation 5 Console (Disc Version)",
    price: 499.99,
    shipping: 0,
    tax: 40.00,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "12",
    name: "ASUS ROG Strix Gaming Laptop 15.6\" FHD 144Hz, Ryzen 9, RTX 3070",
    price: 1799.99,
    originalPrice: 1999.99,
    shipping: 0,
    tax: 144.00,
    platform: "ebay",
    url: "https://www.ebay.com",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "13",
    name: "GoPro HERO11 Black - Waterproof Action Camera with 5.3K Video",
    price: 399.99,
    originalPrice: 449.99,
    shipping: 0,
    tax: 32.00,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "14",
    name: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    price: 249.00,
    shipping: 0,
    tax: 19.92,
    platform: "flipkart",
    url: "https://www.flipkart.com",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "15",
    name: "LG C2 65-Inch 4K Smart OLED TV",
    price: 1699.99,
    originalPrice: 1899.99,
    shipping: 49.99,
    tax: 136.00,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "16",
    name: "Samsung Galaxy Watch 5 Pro (GPS) Smart Watch",
    price: 449.99,
    originalPrice: 499.99,
    shipping: 0,
    tax: 36.00,
    platform: "ebay",
    url: "https://www.ebay.com",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "17",
    name: "Dyson V12 Detect Slim Absolute Cordless Vacuum Cleaner",
    price: 649.99,
    shipping: 0,
    tax: 52.00,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1584942368913-b98dd9983c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "18",
    name: "Apple iPad Mini (6th Generation) Wi-Fi, 64GB - Space Gray",
    price: 499.00,
    shipping: 0,
    tax: 39.92,
    platform: "flipkart",
    url: "https://www.flipkart.com",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "19",
    name: "Sonos Arc Premium Smart Soundbar with Dolby Atmos",
    price: 899.00,
    shipping: 0,
    tax: 71.92,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  },
  {
    id: "20",
    name: "Kindle Paperwhite (8GB) - Now with 6.8\" display and adjustable warm light",
    price: 139.99,
    originalPrice: 159.99,
    shipping: 0,
    tax: 11.20,
    platform: "amazon",
    url: "https://www.amazon.com",
    image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=700&q=80"
  }
];
