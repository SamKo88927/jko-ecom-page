import { useDispatch, useSelector } from "react-redux";
import { RootState, openProductModal } from "../store";
import { Modal } from "../components/modal/productDetail/modal";
import Button from "@/components/common/button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "@/assets/svg/cart.svg?react";
export interface ModalButtonType {
  name: "purchase" | "cart";
  value: "直接購買" | "加入購物車";
  color: string;
}
const BottomBar = () => {
  //   const [menuActive, setMenuActive] = useState(false);
  const buttonRef = useRef<ModalButtonType>();
  //: to do 各頁的BottomBar Stack 不會只有一種樣式
  const dispatch = useDispatch();
  const { isProductModal } = useSelector((state: RootState) => state.modal);
  const handleButtonClick = (buttonType: ModalButtonType) => {
    buttonRef.current = buttonType;
    dispatch(openProductModal());
  };
  const CartButtonConfig: ModalButtonType = {
    name: "cart",
    value: "加入購物車",
    color: "bg-gray-600",
  };
  const PurchaseButtonConfig: ModalButtonType = {
    name: "purchase",
    value: "直接購買",
    color: "bg-rose-700",
  };
  const { cartData } = useSelector((state: RootState) => state.cart);
  const cartDataLength = cartData.length;
  const navigator = useNavigate();
  return (
    <>
      <div className="sticky bottom-0 z-[50] py-3 pt-2 px-2.5 flex flex-1 bg-[#2F3140] gap-2 text-white justify-center items-center ">
        <button
          onClick={() => {
            navigator("/cart");
          }}
          className="justify-center items-center flex basis-[0%] flex-col px-2.5 py-0.5"
        >
          <button className="">
            <div className="relative">
              <Cart />
              <div className="absolute left-3 bottom-3 flex justify-center items-center bg-[#CF4C5F] w-[20px] h-[20px] rounded-full text-xs">
                {cartDataLength}
              </div>
            </div>
          </button>

          <div className=" text-center text-xs leading-3 self-stretch whitespace-nowrap">
            購物車
          </div>
        </button>
        <Button
          onClick={() => handleButtonClick(CartButtonConfig)}
          className={CartButtonConfig.color}
        >
          <span>{CartButtonConfig.value}</span>
        </Button>
        <Button
          onClick={() => handleButtonClick(PurchaseButtonConfig)}
          className={PurchaseButtonConfig.color}
        >
          <span>{PurchaseButtonConfig.value}</span>
        </Button>
      </div>
      {isProductModal && <Modal buttonRef={buttonRef} />}
    </>
  );
};

export default BottomBar;
