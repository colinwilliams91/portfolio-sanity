import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Photo } from "@/types/Photo";
import { LinkDTO } from "@/types/Link";
import clientConfig from "./config/client-config"

const sanityClient = createClient(clientConfig);

export const getProjects = async (): Promise<Project[]> => {
  return sanityClient.fetch(
    groq`*[_type == "project"] | order(_updatedAt desc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      contributions
    }`
  );
};

export const getProject = async (slug: string): Promise<Project> => {
  return sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      contributions
    }`,
    { slug }
  );
};

// TODO sort --> About Certifications Skills
export const getPages = async (): Promise<Page[]> => {
  return sanityClient.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url
    }`
  )
};

export const getPage = async (slug: string): Promise<Page> => {
  return sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content,
      linkedIn,
      gmail,
      github,
      twitter,
      system,
      server,
      database,
      client,
      styles,
      audiovisual,
      deployment,
      management
    }`,
    { slug }
  )
};

export const getPhoto = async (slug: string): Promise<Photo> => {
  return sanityClient.fetch(
    groq`*[_type == "photo" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`,
    { slug }
  )
};

export const getCertificates = async (): Promise<Photo[]> => {
  return sanityClient.fetch(
    groq`*[_type == "photo"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`
  )
};

export const getLinks = async (): Promise<LinkDTO[]> => {
  return sanityClient.fetch(
    groq`*[_type == "link"]`
  )
};
