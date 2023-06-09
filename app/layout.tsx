'use client'

import { RecoilRoot } from 'recoil'
import Footer from './components/layout/footer'
import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className={sora.className}>
          <div className="bg-[url('/img/background.png')] bg-center bg-cover overflow-hidden ">
            {children}
            <Footer />
          </div>
        </body>
      </RecoilRoot>
    </html>
  )
}
