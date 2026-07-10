import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Job Digest - AI-Powered Job Matching Platform',
  description: 'Discover your perfect job match with AI. Get personalized job recommendations based on your skills, experience, and career goals. 98% accuracy rate.',
  keywords: ['job search', 'career', 'AI matching', 'recruitment', 'employment'],
  authors: [{ name: 'Job Digest Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jobdigest.com',
    siteName: 'Job Digest',
    title: 'Job Digest - AI-Powered Job Matching Platform',
    description: 'Discover your perfect job match with AI-powered matching. Get personalized recommendations with 98% accuracy.',
    images: [
      {
        url: 'https://jobdigest.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Job Digest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
