const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  serverExternalPackages: [], // Moved from experimental.serverComponentsExternalPackages
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    fullySpecified: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    
    // Remove custom optimization that conflicts with Next.js 15
    config.infrastructureLogging = {
      level: 'none'
    };

    return config;
  }
};

module.exports = nextConfig;