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
  server: PortableTextBlock[];
  database: PortableTextBlock[];
  client: PortableTextBlock[];
  styles: PortableTextBlock[];
  audiovisual: PortableTextBlock[];
  deployment: PortableTextBlock[];
  management: PortableTextBlock[];
};
