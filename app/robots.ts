import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/studio/"],
      },
    ],
    sitemap: "https://www.markazenterprises.pk/sitemap.xml",
    host: "https://www.markazenterprises.pk",
  };
}
