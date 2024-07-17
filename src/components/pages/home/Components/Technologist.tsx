"use client"
import Title from "@/components/common/Title";
import { Icons } from "@/components/icons";
import { Container, Flex } from "@/lib/styledComponents";


interface Technology {
  nameTech: string;
  iconTech: React.ComponentType; // Represents the Icon component type
}

const Technology: Technology[] = [
  {
    nameTech: 'React Js',
    iconTech: Icons.reactIcon, // Assuming icons are exported as named components
  },
  {
    nameTech: 'Javascript',
    iconTech: Icons.javascript,
  },
  {
    nameTech: 'Tailwindcss',
    iconTech: Icons.tailwindcss,
  },
  {
    nameTech: 'css',
    iconTech: Icons.css,
  },
];

export function Technologist(){
  return (
    <Container $bg="body" $margin={true}>
      <Title text={'Browse the category'} subject={'category'} />
      <Flex>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8  w-full">
          {[...Array(4)].map((item: Technology, index: number) => (
            <Flex key={index} $display={'col'} className="justify-center items-center rounded-xl bg-header border- [0.2px] border-gray-300 shadow-xl shadow-gray-400 px-6 py-8">
              <Icons.reactIcon/>
              <div className="font-semibold text-base text-title mt-5">
                React Js
              </div>
            </Flex>
          ))}
        </div>
      </Flex>
    </Container>
  );
}
