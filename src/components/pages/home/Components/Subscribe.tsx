"use client";
import { Container, Flex } from "@/lib/styledComponents";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Subscribe() {
  return (
    <Container $bg={"header"} className=" w-full " >
      <Flex $display={"col"} className="w-full justify-center items-center py-14" >
        <Image
          src={"/assets/images/Icon.svg"}
          alt={"Subscribe"}
          width={130}
          height={130}
          className="mb-7"
        />
        <h5 className=" font-semibold text-title text-lg lg:text-xl xl:text-2xl text-center mb-2" >
          Subscribe For the lastest updates
        </h5 >
        <p className="text-center text-paragraph text-xs lg:text-sm  max-w-[696px] mb-6" >
          Subscribe to newsletter and never miss the new post every week.
        </p >
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4" >
          <Input className="outline-none placeholder:text-paragraph lg:w-[400px]" placeholder="Enter Email" />
          <Button >Subscribe</Button >
        </div >
      </Flex >
    </Container >
  );
}