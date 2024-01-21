import { RootState, addCart, closeProductModal } from "./../../../store";
import { useDispatch, useSelector } from "react-redux";
import Chips, { ChipType } from "./chips/chips";
import { useState } from "react";
import {
  transformColorType,
  transformProductIndex,
  transformSizeType,
} from "@/helpers/product.helpers";
import ChipsTitle from "./chips/chips-title";
import Button from "@/components/common/button";
import { ModalButtonType } from "src/layouts/bottomBar";
import Close from "@/assets/svg/close.svg?react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
interface ModalProps {
  type?: string;
  description?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  buttonRef: React.MutableRefObject<ModalButtonType | undefined>;
}
interface signProps {
  sign: "increase" | "decrease";
}
export const Modal = ({ buttonRef }: ModalProps) => {
  // const spec = ["S", "M", "L", "XL", "XXL"];
  const { productData } = useSelector((state: RootState) => state.product);
  const { id, color, name, size, images, price } = productData;
  const colorData = transformColorType(color);
  const sizeData = transformSizeType(size);

  const dispatch = useDispatch();
  const [chipSpec, setChipSpec] = useState<ChipType[]>(colorData);
  const [chipSize, setChipSize] = useState<ChipType[]>(sizeData);

  const productSpecIndex: number = transformProductIndex(chipSpec);
  const productSizeIndex: number = transformProductIndex(chipSize);
  const [quantity, setQuantity] = useState(1);

  const handleCounter = ({ sign }: signProps) => {
    setQuantity((prevQuantity) =>
      sign === "increase" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  const handleModalSubmit = (buttonType?: ModalButtonType) => {
    const ProductData = {
      id: uuidv4(),
      img: images[productSpecIndex].url,
      productId: id,
      name: name,
      size: size[productSizeIndex].value,
      spec: color[productSpecIndex].value,
      price: price[productSpecIndex].value,
      totalPrice: price[productSpecIndex].value * quantity,
      quantity: quantity,
    };
    // buttonType?.name == "purchase"
    //   ? console.log("purchase")
    //   : console.log("cart");
    toast.success("已加入購物車");
    dispatch(addCart(ProductData));
  };
  const [maxQuantity, setmaxQuantity] = useState<number>(7);
  // useEffect(() => {
  // const fetchMaxQuantity = () => {
  //   console.log("fetchMaxQuantity");
  // dispatch(size[productSizeIndex],color[productSpecIndex])
  // setmaxQuantity()
  // };
  // if(){ to do  use spec and size to filter actual max quantity
  //   fetchMaxQuantity()
  // }
  // }, [chipSpec, chipSize]);
  const [quantityError, setQuantityError] = useState<boolean>(false);

  const handleQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (newQuantity < 1 || newQuantity > maxQuantity) {
      setQuantityError(true);
      console.error(`Quantity should be between 1 and ${maxQuantity}`);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end text-white">
      <div className="fixed inset-0 z-50 bg-black/50 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in" />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-full relative z-50 rounded-xl overflow-hidden"
      >
        <div className="bg-[#2F3140]  flex flex-col pt-3">
          <div className="items-stretch flex gap-3 px-3 py-1 ">
            <img
              loading="lazy"
              srcSet={images[productSpecIndex].url || ""}
              className="aspect-square object-contain object-center flex min-w-16 h-16 overflow-hidden rounded-lg"
            />
            <div className="grid text-opacity-90">
              <span className="text-sm">{name}</span>
              <span>${price[productSpecIndex].value}</span>
            </div>
            <button
              className="flex"
              onClick={() => dispatch(closeProductModal())}
            >
              {/* <X className="w-6 h-6 " /> */}
              <Close />
            </button>
          </div>

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce35bb722d1be9a40eb6f4c0fb11fa49561b24824c8c68244dbae6594431153?"
            className="aspect-[375] object-contain object-center w-full stroke-[1px] stroke-neutral-800 overflow-hidden mt-2"
          />

          <ChipsTitle name="尺寸" description="補充說明" />
          <Chips data={chipSize} setChipsData={setChipSize} />

          <ChipsTitle name="顏色" description="補充說明" />
          <Chips data={chipSpec} setChipsData={setChipSpec} />

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce35bb722d1be9a40eb6f4c0fb11fa49561b24824c8c68244dbae6594431153?"
            className="aspect-[375] object-contain object-center w-full stroke-[1px] stroke-neutral-800 overflow-hidden mt-2"
          />
          <span className="flex w-full justify-between gap-5 mt-2 pt-1 pb-3 px-3">
            <div className="text-white text-opacity-90 text-base font-medium leading-6">
              購買數量
            </div>
            <div className="flex justify-between w-[98px] items-center text-xl">
              <button
                className="w-[22px] h-[22px] justify-center items-center flex bg-[color:var(--dark-palette-gray-600,#43465E)] rounded-[3.3px]"
                disabled={quantity <= 1}
                onClick={() => handleCounter({ sign: "decrease" })}
              >
                -
              </button>
              {/* <span className="w-[42px] h-6 flex items-center justify-center">
                {quantity}
              </span> */}
              <input
                type="number"
                className="w-[42px] h-6 flex items-center justify-center bg-transparent text-end"
                value={quantity}
                onChange={(e) =>
                  handleQuantity(parseInt(e.target.value, maxQuantity))
                }
                min="1"
                max={maxQuantity}
              />
              <button
                className="w-[22px] h-[22px] flex items-center justify-center bg-[color:var(--dark-palette-gray-600,#43465E)] rounded-[3.3px]"
                onClick={() => handleCounter({ sign: "increase" })}
              >
                ＋
              </button>
            </div>
          </span>
          <div className="flex flex-col px-4 py-2">
            <Button
              isDisabled={quantityError}
              className={buttonRef.current?.color}
              onClick={() => handleModalSubmit(buttonRef.current)}
            >
              <span>{buttonRef.current?.value}</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
