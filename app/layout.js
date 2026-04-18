import './globals.css'

export const metadata = {
  title: 'Njoku Joshua Uchenna | Frontend Developer',
  description: 'Energetic and self-taught Frontend Developer with 4+ years of hands-on experience building responsive, user-centric web applications. React, Tailwind CSS, Firebase expert based in Owerri, Nigeria. Open to remote opportunities worldwide.',
  keywords: [
    'Njoku Joshua',
    'Frontend Developer Nigeria',
    'React Developer Owerri',
    'Tailwind CSS Developer',
    'Firebase Developer',
    'JavaScript Developer',
    'Fullstack Developer Nigeria',
    'Remote Frontend Developer',
    'Web Developer FUTO',
    'Hyperbird Technologies',
  ],
  authors: [{ name: 'Njoku Joshua Uchenna', url: 'https://nj-portfolio-omega.vercel.app' }],
  creator: 'Njoku Joshua Uchenna',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://nj-portfolio-omega.vercel.app',
    siteName: 'Njoku Joshua | Frontend Developer',
    title: 'Njoku Joshua Uchenna | Frontend Developer',
    description: 'Building pixel-perfect, blazing-fast web experiences. 4+ years crafting responsive UIs with React, Tailwind CSS & Firebase.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Njoku Joshua Uchenna - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Njoku Joshua Uchenna | Frontend Developer',
    description: 'Building pixel-perfect, blazing-fast web experiences. 4+ years crafting responsive UIs with React, Tailwind CSS & Firebase.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://nj-portfolio-omega.vercel.app'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#e5a825" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nj-portfolio-omega.vercel.app" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Njoku Joshua Uchenna',
              jobTitle: 'Frontend Developer',
              url: 'https://nj-portfolio-omega.vercel.app',
              email: 'njokujoshua571@gmail.com',
              telephone: '08056364802',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Owerri',
                addressCountry: 'NG',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Federal University of Technology, Owerri',
              },
              knowsAbout: ['React.js', 'Tailwind CSS', 'JavaScript', 'Firebase', 'Next.js', 'TypeScript'],
              sameAs: [
                'https://linkedin.com/in/joshua-njoku-9524b9369',
                'https://github.com/NJWILD',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
