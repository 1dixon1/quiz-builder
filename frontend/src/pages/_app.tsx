import './styles/globals.css';  
import type { AppProps } from 'next/app';
import type { Metadata } from "next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 font-sans">
      <main className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg bg-white">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

