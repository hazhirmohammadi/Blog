"use client";
import { Icons } from "@/components/icons";
import { Container, Flex } from "@/lib/styledComponents";
import { Title } from "../../../common/articleComponents";

const s = {
  color: "#d9ad0e",
};


const Technology = [
  {
    nameTech: "Typescript",
    iconTech: <Icons.typescript className="technology-card size-6 md:size-8 lg:size-16" />,
  },
  {
    nameTech: "Javascript",
    iconTech: <Icons.javascript className="technology-card size-6 md:size-8 lg:size-16" />,
  },
  {
    nameTech: "NodeJs",
    iconTech: <Icons.nodeJs className="technology-card size-6 md:size-8 lg:size-16" />,
  },
  {
    nameTech: "React Js",
    iconTech: <Icons.reactIcon className="technology-card size-6 md:size-8 lg:size-16" />,
  },
];

export function Technologist() {
  return (
    <Container $bg="body" $margin={true} >
      <Title text={"Browse the category"} subject={"category"} />
      <Flex >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8  w-full" >
          {Technology.map((item, index: number) => (
            <Flex key={index} $display={"col"} className="justify-center items-center rounded-xl bg-header border- [0.2px] border-gray-300 shadow-xl shadow-gray-400 hover:shadow transition-all px-6 py-8" >
              {item.iconTech}
              <div className="font-semibold text-base text-title mt-5" >
                {item.nameTech}
              </div >
            </Flex >
          ))}
        </div >
      </Flex >
    </Container >
  );
}
