'use client'

import React from 'react'
import Image from "next/image"
import { twMerge } from 'tailwind-merge'
import ReactPlayer from 'react-player'
import { Skeleton } from '@/components/skeleton'
import { Spinner } from '@/components/spinner'

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
    //TODO: global state
    const EmptyState = () => {
        setIsLoading(false)
        return (
            <h4 className='text-white/80 font-lg font-medium text-center'>
                No resourse
            </h4>
        )
    }

    const getResourse = () => {
        switch (apod.media_type) {
            case 'image': return <ApodImage />;
            case 'video': return <ApodVideo />;
            default: return <EmptyState />;
        }
    }

    return (
        <div className="h-full w-full relative rounded-md overflow-hidden transition-opacity">
            {getResourse()}
            {isLoading && (
                <div className='w-full h-full bg-black/20 flex items-center justify-center'>
                    <Spinner size='md' />
                </div>
            )}
        </div>
    )
})
ApodResourse.displayName = 'Resourse'

export const ResourseSkeleton = () => {
    return (
        <Skeleton className='w-full h-[268px]' />
    )
}