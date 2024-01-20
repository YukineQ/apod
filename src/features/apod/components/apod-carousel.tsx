import React from 'react'

import { ApodResourse } from './apod-resourse'
import { useAPOD } from '../api/get-apod'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/carousel'

type ApodCarouselProps = {
    query: Partial<ApodQueryParams>;
}

export const ApodCarousel = ({
    query,
}: ApodCarouselProps) => {
    const { data: apods, isLoading } = useAPOD(query)
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

    if (isLoading) return 'Loading...'

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
                <CarouselNext />
                <CarouselPrevious />
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
                                text-xs
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