import './globals.css'
import { Cairo} from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Weframetech',
  description: 'Gthis is a Todo App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
