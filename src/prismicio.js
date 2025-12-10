import { createClient as baseCreateClient } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../slicemachine.config.json";

export const repositoryName = 
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

const routes = [
  { type: "blog_post", path: "/blog/:uid" },
  { type: "category", path: "/blog/category/:uid" },
];

export const createClient = (config = {}) => {
  const client = baseCreateClient(repositoryName, {
    // Add accessToken here - CRITICAL for production
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });
  return client;
};