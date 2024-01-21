import React from 'react'

import { ApodResourse, ResourseSkeleton } from './apod-resourse'
import { useAPOD } from '../api/get-apod'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/carousel'
import { Skeleton } from '@/components/skeleton'

type ApodCarouselProps = {
    query: Partial<ApodQueryParams>;
}

export const ApodCarousel = ({
    query,
}: ApodCarouselProps) => {
    const { data: apods, isFetched } = useAPOD(query)
    const [api, setApi] = React.useState<CarouselApi>()
    const [currentApod, setCurrentApod] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrentApod(api.selectedScrollSnap())

        api.on('select', () => {
            setCurrentApod(api.selectedScrollSnap())
        })
    })

    if (!apods && isFetched) {
        return (
            <h2 className='text-2xl text-white/80 text-center font-medium'>
                It's seems like no data yet for this day
            </h2>
        )
    }

    return apods && (
        <>
            <Carousel
                setApi={setApi}
                className='w-full max-w-md mx-auto'
            >
                <CarouselContent className='h-[268px]'>
                    {apods.map((apod) => (
                        <CarouselItem key={apod.date}>
                            <ApodResourse apod={apod} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='hidden md:flex' />
                <CarouselPrevious className='hidden md:flex' />
            </Carousel>
            <div className='grid col-span-full'>
                <div className='flex flex-col flex-1 w-full'>
                    <h3
                        className='
                            text-white/80 
                            text-center 
                            text-xl 
                            font-semibold 
                            pb-2 
                            pt-4
                        '
                    >
                        {apods[currentApod]?.title}
                    </h3>
                    <p
                        className='
                                text-md
                                md:text-sm
                                font-light 
                                text-white/50 
                                lg:columns-3
                                md:columns-2
                            '
                    >
                        {apods[currentApod]?.explanation}
                    </p>
                    <p
                        className='
                                text-center 
                                text-xs 
                                text-white/20 
                                italic 
                                pt-4
                            '
                    >
                        {apods[currentApod]?.date}
                    </p>
                </div>
            </div>
        </>
    )
}

export const ApodCarouselSkeleton = () => {
    return (
        <>
            <ResourseSkeleton />
            <div className='grid col-span-full'>
                <div className='flex flex-col flex-1 w-full justify-center items-center pt-4 gap-4'>
                    <Skeleton className='md:w-80 w-full h-8' />
                    <Skeleton className='w-full py-4 md:h-36 h-60' />
                </div>
            </div>
        </>
    )
}