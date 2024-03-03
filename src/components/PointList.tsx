import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getPointCards } from "@/lib/posts"
import Image from "next/image"
import Button from "./Button"
import Line from "./Line"

export default async function PointList() {
  const allPosts = await getPointCards(); // Получение данных
  const cardsItem = allPosts.map((node: any) => node.pointCards); // Извлечение массива карточек (cards)
  return (
    <div className="mt-[30px] flex flex-col items-center justify-center sm:mt-[55px] md:grid md:grid-cols-2 md:justify-items-center md:gap-8 xl:grid-cols-3 xl:justify-end">
      {cardsItem.map((item: any, i: number) => {
        return (
          <Card
            key={i}
            className={`mb-[20px] flex h-[450px] w-[300px] flex-col justify-between rounded-[32px] md:mb-[0px] md:h-[490px] md:w-[320px] lg:w-[355px]`} 
            style={{
              background: item.bgColor ? item.bgColor : "",
              backgroundImage: `url(${item.bgImg?.node.sourceUrl})`,
            }}
          >
            <Image
              src={
                item.cardImg && item.cardImg.node
                  ? item.cardImg.node.sourceUrl
                  : ""
              }
              alt={item.imgAlt}
              width={370}
              height={200}
              className="mb-[17px] h-[200px] rounded-[32px] md:mb-[32px]"
            />
            <CardHeader className="pt-[0px]">
              <CardTitle className="mb-[6px] text-lg font-semibold text-white md:text-xl">
                {item.title}
              </CardTitle>
              <Line className="mb-[16px]" />
              <CardDescription className="mt-[16px] text-xs font-light text-slate-200 md:text-base">
                {item.content}
              </CardDescription>
            </CardHeader>

            <CardFooter className="lg:pb-[40px]">
              {item.btn && <Button text={item.btn} />}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
