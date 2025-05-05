import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://oluwaseun.dev/sitemap.xml",
    host: "https://oluwaseun.dev",
  };
}
