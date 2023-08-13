"use client"
import { UserDataContextProvider } from '@/store/movie.context'
import './globals.css'
import { DataContextProvider } from '@/store/filter.context'


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
            {children}
          </DataContextProvider>
        </UserDataContextProvider>
      </body>
    </html>
  )
}
