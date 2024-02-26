import Line from "./Line";

type ItemProps = {
  id: number;
  title: string;
  description: string;
};
type CardContentProps = {
  item: ItemProps;
};

export default function CardContent({ item }: CardContentProps) {
  return (
    <>
      <div className="mb-[16px] max-w-[342px] text-lg font-semibold lg:text-xl">
        {item.title}
      </div>
      <Line className="h-[3px] w-[250px] xl:w-[359px]" />
      <div className="mt-[16px] max-w-[385px] text-sm font-normal lg:text-base">
        {item.description}
      </div>
    </>
  );
}
