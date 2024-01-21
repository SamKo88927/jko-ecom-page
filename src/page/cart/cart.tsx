import Button from "@/components/common/button";
import { cn } from "@/lib/utils";
import { clearCart, removeCartItem, RootState } from "@/store/index";
import { useDispatch, useSelector } from "react-redux";
import Close from "@/assets/svg/close.svg?react";
const Cart = () => {
  const { cartData } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(clearCart());
  };
  const ButtonConfig = {
    name: "clearCart",
    value: "清空購物車",
    color: "bg-rose-700",
  };
  const handleRemoveClick = (id: string) => {
    dispatch(removeCartItem(id));
  };
  return (
    <div className="flex flex-col min-h-screen w-full px-3 py-2 bg-black text-white gap-4">
      {cartData.map((item) => {
        return (
          <>
            <div className="bg-[#272934] flex flex-col py-3 rounded-xl">
              <div className="items-stretch flex gap-3 px-3 py-1 ">
                <img
                  loading="lazy"
                  srcSet={item.img || ""}
                  className="aspect-square object-contain object-center flex min-w-16 h-16 overflow-hidden rounded-lg"
                />
                <div className="grid text-opacity-90">
                  <span className="text-sm">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button
                  className="flex"
                  //   onClick={() => dispatch(closeProductModal())}
                >
                  {/* <X className="w-6 h-6 " /> */}
                  <Close onClick={() => handleRemoveClick(item.id)} />
                </button>
              </div>

              <div className="py-2 px-3">
                <div className="border-black border-[1px] opacity-30"></div>
              </div>
              <div className="px-3 text-sm flex items-center gap-1.5 py-0.5 justify-between">
                <span>總數量：{item.quantity}</span>
                <span>總價格：${item.totalPrice}</span>
              </div>

              <div className="pl-3 py-1 text-xs font-medium flex gap-2 text-opacity-90">
                <span className="rounded bg-pink-900  px-1.5 pt-[3px] pb-[2px]">
                  {item.size}
                </span>
                <span className="rounded bg-pink-900  px-1.5 pt-[3px] pb-[2px]">
                  {item.spec}
                </span>
              </div>
            </div>
          </>
        );
      })}
      <div className="fixed bottom-4">
        <Button
          onClick={() => handleButtonClick()}
          className={cn(ButtonConfig.color, "max-h-[44px]")}
        >
          <span>{ButtonConfig.value}</span>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
