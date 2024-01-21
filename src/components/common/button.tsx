import { cn } from "@/lib/utils";
import { ModalButtonType } from "src/layouts/bottomBar";

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
        `min-w-[141px] text-lg font-semibold flex flex-1 justify-center items-center py-3 px-4
        hover:bg-opacity-75
        rounded-xl`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
