import React from 'react'

import { WEEK_DAYS } from '@/features/calendar/constants/date'

type CalendarWeekHeaderProps = {
    isSundayFisrt: boolean;
}

export const CalendarWeekHeader = ({
    isSundayFisrt,
}: CalendarWeekHeaderProps) => {
    const weeksArray = React.useMemo(() => {
        const weekDays = Object.values(WEEK_DAYS)
        return isSundayFisrt ? [...weekDays.slice(1), weekDays[0]] : weekDays
    }, [])

    return (
        <div className='grid grid-cols-7 py-1'>
            {weeksArray.map((day) => (
                <div className='inline-flex items-center justify-center text-xs text-white/60' key={day}>
                    {day}
                </div>
            ))}
        </div>
    )
}