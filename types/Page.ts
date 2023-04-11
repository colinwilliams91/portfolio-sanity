import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
  linkedIn: PortableTextBlock[];
  gmail: PortableTextBlock[];
  github: PortableTextBlock[];
  twitter: PortableTextBlock[];
  system: string[];
  server: string[];
  database: string[];
  client: string[];
  styles: string[];
  audiovisual: string[];
  deployment: string[];
  management: string[];
};
