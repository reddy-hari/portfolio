export interface YouTubeData {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: YTItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YTItem {
  kind: string;
  etag: string;
  id: VideoID;
  snippet: YTSnippet;
}

export interface VideoID {
  kind: string;
  videoID: string;
}

export interface YTSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YTThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YTThumbnails {
  default: ThumbnailParams;
  medium: ThumbnailParams;
  high: ThumbnailParams;
}

export interface ThumbnailParams {
  url: string;
  width: number;
  height: number;
}

export interface IYTVideoProps {
  ytVideo: YTItem;
}
