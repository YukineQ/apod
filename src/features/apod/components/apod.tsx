'use client'

import React from 'react'

import { ApodCarousel, ApodCarouselSkeleton } from './apod-carousel'
import { ApodFilter } from './apod-filter'
import { DateSelection } from '@/features/calendar'
import { dateToString } from '@/utils/dateToString'

export const Apod = () => {
    const [state, setState] = React.useState<DateSelection>({
        startDate: new Date(),
        endDate: new Date(),
    })

    return (
        <div className='max-w-4xl mx-auto w-full h-full'>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <div className='flex items-center lg:justify-start justify-center'>
                    <ApodFilter state={state} setState={setState} />
                </div>
                <React.Suspense fallback={<ApodCarouselSkeleton />}>
                    <ApodCarousel
                        query={{
                            start_date: dateToString(state.startDate),
                            end_date: dateToString(state.endDate!)
                        }}
                    />
                </React.Suspense>
            </div>
        </div>
    )
}