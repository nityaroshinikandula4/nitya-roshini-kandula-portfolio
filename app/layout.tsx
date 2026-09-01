import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nitya-roshini-kandula.ricky-8289.chatgpt.site'),
  title: 'Nitya Roshini Kandula | Java Full Stack Developer',
  description: 'Java full stack developer portfolio featuring Spring Boot, REST API, data, security, and applied engineering projects.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nitya Roshini Kandula | Java Full Stack Developer',
    description: 'Building dependable software from API to interface with Java, Spring Boot, data, security, and thoughtful web experiences.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og.png',
        width: 1729,
        height: 910,
        alt: 'Nitya Roshini Kandula — Java Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitya Roshini Kandula | Java Full Stack Developer',
    description: 'Building dependable software from API to interface.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
