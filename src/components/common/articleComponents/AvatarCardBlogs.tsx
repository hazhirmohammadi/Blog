"use client";
import styled from "styled-components";

interface AvatarCardProps {
  author: string;
  authorImage?: string;
  postTimeBlog: string;
  publishedAt: string;
}

const AvatarImage = styled.div<{ urlImage: string; }>`
    background-image: url("${prop => prop.urlImage}");
`;
export function AvatarCardBlogs ({ author, authorImage, postTimeBlog, publishedAt }:AvatarCardProps) {
  return (
    <div className="flex flex-row gap-x-4" >
      <AvatarImage urlImage={authorImage||"/assets/images/article.png"} className="size-8 rounded-full border border-gray-500  bg-cover" >
      </AvatarImage >
      <div className="flex flex-col" >
        <div className="text-start text-sm font-bold text-title" >
          <span >{author}</span >
        </div >
        <div className="text-[10px] text-paragraph" >
          <p >{postTimeBlog} ∙ {publishedAt}</p >
        </div >
      </div >
    </div >
  );
};


