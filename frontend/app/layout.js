import './globals.css';
import localFont from 'next/font/local';

// Register the Camica font
const camica = localFont({
  src: '../public/fonts/camica.ttf',
  variable: '--font-camica',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={camica.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
