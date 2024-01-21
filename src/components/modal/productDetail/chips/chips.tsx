import React from "react";

//Chips List for spec and size.
//state active and isDisabled ( conditions can be out of stock or others)
export interface ChipType {
  value: string;
  active: boolean;
  isDisabled: boolean;
}
interface ChipsProps {
  data: { value: string; active: boolean; isDisabled: boolean }[];
  setChipsData: React.Dispatch<React.SetStateAction<ChipType[]>>;
}
const Chips = ({ data, setChipsData }: ChipsProps) => {
  const handleChipClick = (index: number) => {
    const updatedChipsData = data.map((chip, i: number) => {
      return { ...chip, active: i === index ? !chip.active : false };
    });

    setChipsData(updatedChipsData);
  };
  return (
    <div className="flex gap-2.5 px-3 pt-1 pb-3 flex-wrap">
      {data?.map((item, index: number) => (
        <button
          onClick={() => handleChipClick(index)}
          key={index}
          className={`flex items-center justify-center text-sm whitespace-nowrap px-3 py-1.5 box-border border-[1px] border-[#545872] border-solid rounded-lg
         ${item.active ? "bg-rose-700 border-rose-700" : ""}
         ${item.isDisabled ? "opacity-50 cursor-not-allowed" : ""}
       `}
          disabled={item.isDisabled}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
};

export default Chips;
