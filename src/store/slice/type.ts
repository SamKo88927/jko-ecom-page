export type CartType = {
  id: string;
  productId: string;
  img: string;
  name: string;
  size: string;
  spec: string;
  price: number;
  totalPrice: number;
  quantity: number;
};

export type ProductType = {
  id: string;
  name: string;
  price: ProductPriceType[];
  category: CategoryType[];
  size: ProductSizeType[];
  color: ProductColorType[];
  isFeatured: boolean;
  desc: string;
  note: string;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  images: ProductImageType[];
};
export type ProductPriceType = {
  id: string;
  name: "sale" | "discount";
  value: number;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
};
export type CategoryType = {
  id: string;
  name?: string;
  value: string;
  createdAt?: Date;
  updatedAt?: Date;
};
export type ProductSizeType = {
  id: string;
  name?: string;
  value: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
};
export type ProductColorType = {
  id: string;
  name?: string;
  value: string;
  quantity: number;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
};
export type ProductImageType = {
  id: string;
  productId: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
  order: number;
};
