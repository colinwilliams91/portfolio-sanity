import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { Page } from "@/types/Page";
import { Photo } from "@/types/Photo";
import clientConfig from "./config/client-config"

export const getProjects = async (): Promise<Project[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt) {
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
  return createClient(clientConfig).fetch(
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

export const getPages = async (): Promise<Page[]> => {
  return createClient(clientConfig).fetch(
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
  return createClient(clientConfig).fetch(
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
  return createClient(clientConfig).fetch(
    groq`*[_type == "photo" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url
    }`,
    { slug }
  )
};

export const getCertificates = async (): Promise<Photo[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "photo"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url
    }`
  )
};
