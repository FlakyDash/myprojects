import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Демо-сайт — Футер',
  description: 'Тестовый сайт для демонстрации возможностей.',
  icons: { icon: '/logo.svg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
