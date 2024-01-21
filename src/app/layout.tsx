import React from 'react'
import type { Metadata } from 'next'

import { AppProvider } from '@/providers'
import './globals.css'


export const metadata: Metadata = {
    title: 'Astronomy Picture of the Day',
    description: 'Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppProvider>
                    <main>
                        {children}
                    </main>
                </AppProvider>
            </body>
        </html>
    )
}
