import React from 'react'

import { Apod } from '@/features/apod'
import { PageContainer } from '@/components/page-container'

export default function Home() {
    return (
        <PageContainer>
            <div className="flex items-center justify-center flex-col w-full gap-10">
                <h1
                    className="
                        text-5xl 
                        text-white/80 
                        font-semibold 
                        tracking-tight 
                    "
                >
                    Astronomy Picture of the Day
                </h1>
                <Apod />
            </div>
        </PageContainer>
    )
}
