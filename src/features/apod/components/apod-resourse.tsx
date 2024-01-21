'use client'

import React from 'react'
import Image from "next/image"
import { twMerge } from 'tailwind-merge'
import ReactPlayer from 'react-player'

export const ApodResourse = React.memo(({
    apod
}: {
    apod: Apod
}) => {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setIsLoading(true)
    }, [apod])

    const ApodImage = () => (
        <Image
            src={apod.url}
            alt={apod.title}
            fill
            priority
            className={twMerge(
                "object-cover opacity-100",
                isLoading && 'opacity-0'
            )}
            onLoadingComplete={() => setIsLoading(false)}
        />
    )

    const ApodVideo = () => (
        <ReactPlayer
            url={apod.url}
            width='100%'
            height='100%'
            onReady={() => setIsLoading(false)}
        />
    )

    const getResourse = () => {
        switch (apod.media_type) {
            case 'image': return <ApodImage />;
            case 'video': return <ApodVideo />;
            default: return null;
        }
    }

    return (
        <div className="h-full w-full relative rounded-md overflow-hidden transition-opacity">
            {getResourse()}
            {isLoading && (
                <div className='w-full h-full bg-black/20 animate-pulse transition-none' />
            )}
        </div>
    )
})