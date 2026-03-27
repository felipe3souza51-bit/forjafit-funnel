import type { Metadata } from 'next';
import './globals.css';
import { UtmCapture } from '@/components/UtmCapture';

export const metadata: Metadata = {
  title: 'Forja Fit Funnel',
  description: 'Funil low ticket para Forja Fit com quiz, resultado, oferta e bridge.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <UtmCapture />
        {children}
      </body>
    </html>
  );
}
