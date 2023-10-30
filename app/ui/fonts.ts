import { Inter } from 'next/font/google';
import { Acme } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
});
export const acme = Acme({
    subsets: ['latin'],
    weight: ['400']
});