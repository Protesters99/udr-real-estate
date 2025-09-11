/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/prosper99/**"
            },
            {
                protocol: "https",
                hostname: "flagcdn.com",
                pathname: "/w320/**"
            }
        ]
    }
};

export default nextConfig;
