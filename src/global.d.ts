/// <reference types="@sveltejs/kit" />
interface NavigationItem {
  name: string;
  path: string;
}
interface VideoContent {
  index: number;
  name: string;
  location: string;
  shooting_location: string;
  equipment: {
    photo: string;
    audio: string;
  };
  cover: string;
  src: string;
  memories: string;
  year: number;
  videoId: string;
  maps?: Array<string>;
}
