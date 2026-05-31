import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repository.endsWith(".github.io");
const githubPagesBasePath =
  process.env.GITHUB_PAGES === "true" && repository && !isUserOrOrgPage
    ? `/${repository}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
