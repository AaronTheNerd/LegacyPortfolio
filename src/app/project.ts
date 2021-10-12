import { Video, Image } from "./resource";

export interface Project {
    title: string;
    course: string;
    date: string;
    language: string;
    src_link: string;
    keywords: string;
    description: string;
    side_video: Video;
    images: Image[];
    videos: Video[];
}