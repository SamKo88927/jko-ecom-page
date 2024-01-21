import { ChevronLeft } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-[999] flex flex-1 bg-black text-white h-[44px] justify-center items-center ">
      <button className="absolute left-0">
        <ChevronLeft
          className="w-[34px]"
          onClick={() => window.history.back()}
        />
      </button>
      <div className="font-semibold text-[17px]">街口攻城獅官方網站</div>
    </div>
  );
};

export default Header;
