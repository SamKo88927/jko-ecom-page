import { CarouselImageType } from "@/components/product/carousel";
import { ChipType } from "../components/modal/productDetail/chips/chips";
import {
  ProductColorType,
  ProductImageType,
  ProductPriceType,
  ProductSizeType,
} from "../store";

export const transformColorType = (colors: ProductColorType[]): ChipType[] => {
  return colors.map((color, index) => ({
    value: color.value,
    active: index == 0 ? true : false,
    isDisabled: color.quantity === 0,
  }));
};

export const transformSizeType = (sizes: ProductSizeType[]): ChipType[] => {
  return sizes.map((size, index) => ({
    value: size.value,
    active: index == 0 ? true : false,
    isDisabled: size.quantity === 0,
  }));
};

export const transformProductIndex = (chips: ChipType[]): number => {
  const activeIndex = chips.findIndex((chip) => chip.active === true);
  return activeIndex !== -1 ? activeIndex : 0;
};

export const transformCarouselImageType = (
  images: ProductImageType[],
  name: string
): CarouselImageType[] => {
  const imageList = images?.map((image) => {
    return {
      id: image.id,
      url: image.url,
      altName: name,
    };
  });
  return imageList;
};

export const findMinMaxValues = (
  priceList: ProductPriceType[]
): { min: number | undefined; max: number | undefined } => {
  if (!priceList || priceList.length === 0) {
    return { min: undefined, max: undefined };
  }

  const values = priceList.map((item) => item.value);

  if (values.length === 0) {
    return { min: undefined, max: undefined };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  return { min, max };
};
