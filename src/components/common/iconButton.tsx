// import { ComponentColor, ComponentSize } from "@/components/type";

import { cn } from "@/lib/utils";
import { ModalButtonType } from "src/layouts/bottomBar";

// import { Loading } from "@/svg";

interface ButtonProps {
  className?: string;
  children?: JSX.Element;
  isDisabled?: boolean;
  buttonType?: ModalButtonType;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { isDisabled = false, children, onClick, className } = props;
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        className,
        `min-w-[141px] text-lg font-semibold flex justify-center items-center py-3 px-4  rounded-xl`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
