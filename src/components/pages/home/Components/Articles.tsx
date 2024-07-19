"use client";
import { Container, Flex } from "@/lib/styledComponents";
import Title from "@/components/common/Title";
import Image from "next/image";
import AvatarCardBlogs from "@/components/common/AvatarCardBlogs";

export function Articles() {
  return (
    <Container $bg="body" $margin={true} className="h-screen" >
      <Title text={"Featured Article"} subject={"Article"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        <Flex $display={"col"} className="justify-center bg-neutral-100 rounded-lg" >
          <Image
            src={"/images/article.png"}
            alt="article"
            width={260}
            height={198}
            className="w-full h-[198px] rounded-lg mb-6"
          />
          <div className="flex flex-col p-1" >
            <div className="w-full  mb-10" >
              <span className="text-lg text-title font-semibold" >Fundamental of javascript</span >
            </div >
            <AvatarCardBlogs
              author={"Hazhir"}
              blogPost={"Jul 19, 2024"}
              publishedAt={"3 min ago"}
              altText={"hazhir"}
            />
          </div >
        </Flex >
      </div >
    </Container >
  );
}


