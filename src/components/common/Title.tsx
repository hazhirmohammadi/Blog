import { Flex } from "@/lib/styledComponents";
import { Icons } from "@/components/icons";

interface T {
  text: string;
  subject: string;
  className?: string;
}

const Title = ({ text,subject, className }: T) => {
  return (
    <div className={`${className}
    flex flex-row justify-between items-center w-full py-6 lg:py-12
    `} >
      <Flex $display={"row"} className="whitespace-nowrap items-center text-title" >
        <div className="text-sm md:text-base lg:text-xl font-semibold  "><h3 >{text}</h3 ></div >
        <div className="hidden md:flex w-10 h-[3px] bg-black ml-2 rounded"></div >
      </Flex >
      <div className="text-paragraph" >
        <div className="text-xs md:text-sm lg:text-xl flex flex-row items-center font-semibold">
          <span className=" ">See All</span>{" "}<span className="hidden md:flex">{subject}</span>
          <Icons.chevronRight className=""/>
        </div >
      </div >
    </div >
  );
};

export default Title;
