"use client";
import { Flex } from "@/lib/styledComponents";
import Image from "next/image";
import { Title } from "@/components/common/articleComponents/Title";
import { AvatarCardBlogs } from "@/components/common/articleComponents/AvatarCardBlogs";

// "/assets/images/hazhir.jpg" "Jul 19, 2024" "3 min ago" "hazhir" Fundamental of javascript
interface TProps {
  titleSectionName: string;
  subjectSectionName: string;
  data: Array<object>;
}

export function RowViewArticle({ titleSectionName, subjectSectionName, data }: TProps) {

  return (
    <>
      <Title text={titleSectionName || "Featured Article"} subject={subjectSectionName || "Article"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
        {data ? data.map((item, index) => (
          <Flex key={Math.random() + index} $display={"col"} className="justify-between bg-neutral-100 shadow-lg rounded-xl min-h-[320px]" >
            <Image
              src={item.imageArticleCard || "/assets/images/article.png"}
              alt={item.altImageArticle || "article"}
              width={260}
              height={198}
              className="w-full min-h-[198px] max-h-[200px] rounded-lg "
            />
            <div className="flex flex-col p-4" >
              <div className="w-full  mb-10" >
                <span className="text-lg text-title font-semibold" >{item.ArticleTitleName}</span >
              </div >
              <AvatarCardBlogs
                author={item.author}
                authorImage={item.authorImage}
                postTimeBlog={item.postTimeBlog}
                publishedAt={item.publishedAt}
                altText={item.author}
              />
            </div >
          </Flex >
        )) : <h3 >Not Found!</h3 >}
      </div >
    </>
  );
}

