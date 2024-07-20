"use client";
import { Container } from "@/lib/styledComponents";
import { RowViewArticle } from "@/components/common/articleComponents";
import { ArticleData } from "@/constants/articleData";
import { Button } from "@/components/ui/button";


export function Articles() {
  return (
    <Container className="h-screen" >
      <RowViewArticle
        titleSectionName={"Featured Article"}
        subjectSectionName={"See All Article"}
        data={ArticleData}
      />
      <RowViewArticle
        titleSectionName={"CSS"}
        subjectSectionName={"See All Article"}
        data={ArticleData}
      />
      <RowViewArticle
        titleSectionName={"javascript"}
        subjectSectionName={"See All Article"}
        data={ArticleData}
      />
      <RowViewArticle
        titleSectionName={"React JS"}
        subjectSectionName={"See All Article"}
        data={ArticleData}
      />
      <div className="w-full py-10 flex justify-center" >
        <Button>
          More Article
        </Button>
      </div >
    </Container >
  );
}


