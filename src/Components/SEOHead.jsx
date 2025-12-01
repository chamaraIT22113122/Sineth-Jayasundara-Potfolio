import { Helmet } from "react-helmet-async";

export default function SEOHead({
  title = "Sineth Jayasundera - Electrical Engineering Student",
  description = "Electrical Engineering student at Penn State University with expertise in IoT development, embedded systems, and leadership through Model United Nations. Experienced in smart home technology and community service.",
  keywords = "Sineth Jayasundera, Electrical Engineering, Penn State, IoT Development, Embedded Systems, Model United Nations, Smart Energy, Python, C++",
  image = "https://chamaraIT22113122.github.io/Sineth-Jayasundara-Potfolio/og-image.jpg",
  url = "https://chamaraIT22113122.github.io/Sineth-Jayasundara-Potfolio/",
  type = "website",
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sineth Jayasundera" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22d3ee" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sineth Jayasundera Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
}
