"use client"
import { UserDataContextProvider } from '@/store/movie.context'
import './globals.css'
import { DataContextProvider } from '@/store/filter.context'
import Navbar from '@/layouts/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserDataContextProvider>
          <DataContextProvider>
            <main className='flex flex-col'>
              <Navbar />
              {children}
            </main>
          </DataContextProvider>
        </UserDataContextProvider>
      </body>
    </html>
  )
}
