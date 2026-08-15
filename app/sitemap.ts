import type { MetadataRoute } from "next";
import { DIVISIONS_DATA, SERVICES_DATA, PORTFOLIO_DATA, BLOG_DATA, PRODUCTS_DATA } from "@/app/data/routesData";

const BASE_URL = "https://www.markazenterprises.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/custom-battery-quote`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/divisions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Division pages (11)
  const divisionPages: MetadataRoute.Sitemap = Object.keys(DIVISIONS_DATA).map((slug) => ({
    url: `${BASE_URL}/divisions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Dynamic Product pages (16)
  const productPages: MetadataRoute.Sitemap = Object.keys(PRODUCTS_DATA).map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic Service pages (15)
  const servicePages: MetadataRoute.Sitemap = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Portfolio/Case Study pages (6)
  const portfolioPages: MetadataRoute.Sitemap = Object.keys(PORTFOLIO_DATA).map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic Blog Article pages (3)
  const blogPages: MetadataRoute.Sitemap = Object.keys(BLOG_DATA).map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...divisionPages,
    ...productPages,
    ...servicePages,
    ...portfolioPages,
    ...blogPages,
  ];
}
