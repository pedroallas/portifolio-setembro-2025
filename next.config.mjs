/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuração para deploy estático
  output: "export",
  trailingSlash: true,
  // Base path para GitHub Pages ou outros hosts (deixar vazio para Netlify)
  basePath: "",
  // Desabilitar otimizações server-side para export estático
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
