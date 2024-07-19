"use client"
import Image from "next/image";

interface AvatarCardProps {
  author: string;
  authorImage?: string;
  altText: string;
  blogPost: string;
  publishedAt: string;
}

const AvatarCardBlogs: React.FC<AvatarCardProps> = ({
                                                      author,
                                                      authorImage,
                                                      altText,
                                                      blogPost,
                                                      publishedAt,

                                                    }) => {
  return (
    <div className="flex flex-row gap-x-4" >
      <div className="size-8 rounded-full border border-gray-500 " >
        <Image
          src={authorImage || "/assets/images/hazhir.jpg"}
          alt={altText}
          className=" "
          fill
        />
      </div >
      <div className="flex flex-col" >
        <div className="text-start text-sm font-bold text-title" >
          <span >{author}</span >
        </div >
        <div className="text-[10px] text-paragraph" >
          <p >{blogPost} ∙ {publishedAt}</p >
        </div >
      </div >
    </div >
  );
};
//Jan 10, 2022 ∙ 3 min read
export default AvatarCardBlogs;
