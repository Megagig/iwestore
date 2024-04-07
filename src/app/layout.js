import { Inter } from 'next/font/google';
import './globals.css';
import { dbConnect } from '@/services/mongo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'iwestore',
  description: 'An online bookstore',
};

export default async function RootLayout({ children }) {
  const connection = await dbConnect();
  console.log(connection);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
