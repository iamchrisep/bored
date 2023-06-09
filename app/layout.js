import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import {Sen} from 'next/font/google';
import Image from 'next/image';
import logo from '@/public/logo.png'

const sen = Sen({subsets: ['latin'], weight: ['400', '700', '800']});

export const metadata = {
    title: `I'm bored!`,
    description: `I will help you find something to do when you are bored`,
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`flex flex-col min-h-screen p-12 md:p-24 ${sen.className}`}>
                <header className="flex flex-col justify-center items-center gap-2 md:gap-4">
                    <a
                        href="/bored"
                        className="flex items-center"
                    >
                        <Image
                            src={logo}
                            alt="Logo"
                            width={256}
                            height={96}
                            priority
                        />
                    </a>
                    <h3 className="text-center">I will help you find something to do when you are bored</h3>
                </header>
                <main className="flex-1 flex flex-col items-center my-8 md:my-16">
                    {children}
                </main>
                <footer className="flex justify-center items-center">
                    <a
                        href="https://www.boredapi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold border-b-2 border-transparent hover:border-black"
                    >
                        Bored API
                    </a>
                </footer>
            </body>
        </html>
    );
}
