import { getFirstScreen } from "@/lib/fields";
import DinamicImage from "./DinamicImage";
import H2 from "./H2";
import Header from "./Header";
import Logo from "./Logo";
import Subtitle from "./Subtitle";

export default async function FirstScreen() {
  const nodes = await getFirstScreen(); // Получение данных
  const contents = nodes.map((node: any) => node.firstScreen);

  return (
    <section className="container relative flex h-[680px] flex-col justify-between bg-[url('/main-bg.png')] bg-cover bg-no-repeat pl-[40px] min-[430px]:h-[760px] sm:h-[800px] lg:h-[744px] lg:flex-row">
      <div className="flex max-w-[671px] flex-col justify-between pb-[20px] pt-[30px] lg:pb-[62px] lg:pt-[80px]">
        <Logo />
        <div className="items-normal mt-[50px] flex flex-col lg:mt-[140px] lg:items-center xl:mt-[170px]">
          {contents.map((item: any) => {
            return (
              <div key={item.mainSubtitle}>
                <H2 text={item.mainTitle} />
                <Subtitle
                  text={item.mainSubtitle}
                  className="mt-[15px] max-w-[400px] text-center lg:mt-[30px]"
                />
              </div>
            );
          })}
        </div>
        <Header />
      </div>
      <DinamicImage />
    </section>
  );
}
