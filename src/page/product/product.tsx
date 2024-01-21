import { useNavigate, useParams } from "react-router-dom";
import Carousel from "@/components/product/carousel";
import { useDispatch, useSelector } from "react-redux";
import { ProductPriceType, RootState } from "src/store";
import {
  findMinMaxValues,
  transformCarouselImageType,
} from "@/helpers/product.helpers";
import { useEffect } from "react";
import BottomBar from "@/layouts/bottomBar";

export interface ProductType {
  id: string;
  images: ProductImageType[];
  saleStatus: "0" | "1" | "2"; // 0: NotStartYet, 1: Start, 2: OutOfStock
  name: string;
  ownerAddress: string;
  twdPrice: number;
  usdPrice: number;
  quantity: number;
  spec: string;
  tokenId: number;
}
export interface ProductImageType {
  id: string;
  imageUrl: string;
  order: number;
}

const SalePrice = ({ priceList }: { priceList: ProductPriceType[] }) => {
  const { min, max } = findMinMaxValues(priceList);
  return (
    <span className="opacity-30 text-sm font-normal line-through">
      ${min} - ${max}
    </span>
  );
};
const DiscountPrice = ({ priceList }: { priceList: ProductPriceType[] }) => {
  const { min, max } = findMinMaxValues(priceList);
  return (
    <span className="opacity-90">
      ${min} - ${max}
    </span>
  );
};
const Product = () => {
  const { productData } = useSelector((state: RootState) => state.product);
  const { name, images, price, desc, note, category } = productData;
  const { itemName } = useParams();
  const itemId = itemName?.split("-").pop();
  console.log(itemId);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    //useitemId to fetch the product in redux and set to productData
    const fetchProductData = (itemId: string | undefined) => {
      if (!itemId) {
        return navigator(`/400`);
      }
      dispatch;
    };
    fetchProductData(itemId);
  });
  const imageCarousel = transformCarouselImageType(images, name);
  const salePriceList = price?.filter((item) => item.name == "sale");
  const discountPriceList = price?.filter((item) => item.name == "discount");
  return (
    <>
      <div className="bg-black text-white">
        {/* Product id:{itemId} */}
        <Carousel data={imageCarousel} />
        <div className="grid p-3 gap-3">
          <div className="bg-[#272934] flex flex-col py-3 rounded-xl">
            <div className="opacity-90 font-medium px-3 pt-0.5">{name}</div>
            <div className="pl-3  flex items-center gap-1.5 py-0.5">
              <DiscountPrice priceList={discountPriceList} />
              <SalePrice priceList={salePriceList} />
            </div>

            <div className="pl-3 py-1 text-xs font-medium flex gap-2 text-opacity-90">
              <span className="rounded bg-pink-900  px-1.5 pt-[3px] pb-[2px]">
                街口結帳享九折優惠
              </span>
              <span className="rounded bg-pink-900  px-1.5 pt-[3px] pb-[2px]">
                訂單滿 399 免運費
              </span>
            </div>
            <div className="py-2 px-3">
              <div className="border-black border-[1px] opacity-30"></div>
            </div>
            <div className="opacity-90 text-sm px-3 py-0.5 ">
              <ul role="list" className="list-disc pl-5 ">
                <li> 請於訂單備註填寫您需要的球員</li>
                <li> 球員搭配之號碼不可替換</li>
                <li> 球員款客製訂單出貨需要十四個工作天</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#272934] flex flex-col py-3 rounded-xl">
            <div className="text-sm gap-1 grid px-3 py-0.5">
              <span className="opacity-60">商品分類</span>
              <span className="opacity-80">
                {category.length !== 0
                  ? category[0].value
                  : "這邊可以填寫純文字內容。"}
              </span>
            </div>

            <div className="py-2 px-3">
              <div className="border-black border-[1px] opacity-30"></div>
            </div>

            <div className="text-sm gap-1 grid px-3 py-0.5">
              <span className="opacity-60">商品描述</span>
              <span className="opacity-80">{desc}</span>
            </div>
            <div className="py-2 px-3">
              <div className="border-black border-[1px] opacity-30"></div>
            </div>
            <div className="text-sm gap-1 grid px-3 py-0.5">
              <span className="opacity-60">商品備註</span>
              <span className="opacity-80">{note}</span>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Product;
