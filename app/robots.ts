import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://oluwaseun.wtf/sitemap.xml",
    host: "https://oluwaseun.wtf",
  };
}
