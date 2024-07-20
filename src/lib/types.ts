
type ImageT = {
  imageArticleCard: string;
  altAvatarAuthor: string;
}
type AvatarCard = {
  author: string;
  authorImage: string;
  postTimeBlog: string;
  publishedAt:string;
}

export interface ArticleCardViewTypes {
  image: ImageT;
  AvatarCardBlogs: AvatarCard;
  ArticleTitleName:string;
  data:Array<object>
}