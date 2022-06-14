export interface MediumStories {
  status: string;
  feed: MediumStoryFeed;
  items: MediumStoryItem[];
}

export interface MediumStoryFeed {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
}

export interface MediumStoryItem {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: any;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export interface IBlogProps {
  blogPost: MediumStoryItem;
}
