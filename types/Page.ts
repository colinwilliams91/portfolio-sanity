import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
  linkedIn: string;
  gmail: string;
  github: string;
  twitter: string;
  system: string[];
  server: string[];
  database: string[];
  client: string[];
  styles: string[];
  audiovisual: string[];
  deployment: string[];
  management: string[];
};
