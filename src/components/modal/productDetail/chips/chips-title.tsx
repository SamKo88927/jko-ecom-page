interface ChipsTitleProps {
  name: string;
  description: string;
}
const ChipsTitle = ({ name, description }: ChipsTitleProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 px-3 pb-1 pt-2">
        <span className="opacity-90 font-medium ">{name}</span>
        <span className="opacity-50 text-xs ">{description}</span>
      </div>
    </div>
  );
};

export default ChipsTitle;
