import React from 'react'

import { Apod } from '@/features/apod'

export default function Home() {
    return (
        <div className="w-full h-full flex">
            <div className="flex items-center justify-center flex-col w-full gap-10">
                <h1
                    className="
                        text-5xl 
                        text-white/80 
                        font-semibold 
                        tracking-tight 
                        mt-20
                    "
                >
                    Astronomy Picture of the Day
                </h1>
                <Apod />
            </div>
        </div>
    )
}
