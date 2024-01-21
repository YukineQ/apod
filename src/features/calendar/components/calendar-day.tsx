import React from 'react'
import { twMerge } from 'tailwind-merge'

import {
    isInRange,
    isToday as isTodayFn,
} from "@/utils/date";
import { DateSelection } from './date-range-picker';

type CalendarDayProps = {
    title: string | number;
    date: Date;
    selectedDate: DateSelection;
    selectedMonth: number;
    onChange: (changeDate: Date) => void;
    startDate: Date;
    endDate: Date;
}

type UseCalendarDayProps = Omit<CalendarDayProps, 'title'>

function useCalendarDay({
    date,
    selectedDate,
    selectedMonth,
    onChange,
    startDate,
    endDate,
}: UseCalendarDayProps) {
    const isDateSelected = isInRange(date, selectedDate.startDate, selectedDate.endDate)
    const isNotCurrentMonth = date.getMonth() !== selectedMonth
    const isRangeAvailable = isInRange(date, startDate, endDate)
    const isToday = isTodayFn(date)

    const onClick = () => {
        if (!isRangeAvailable) return
        onChange(date)
    }

    return {
        isDateSelected,
        isNotCurrentMonth,
        isRangeAvailable,
        isToday,
        handlers: {
            onClick,
        }
    }
}

export const CalendarDay = ({
    title,
    date,
    ...props
}: CalendarDayProps) => {
    const {
        isDateSelected,
        isNotCurrentMonth,
        isRangeAvailable,
        isToday,
        handlers: { onClick }
    } = useCalendarDay({ date, ...props })

    return (
        <button
            className={twMerge(`
                inline-flex 
                justify-end 
                items-start 
                h-8 
                w-10 
                py-1 
                px-1.5 
                m-0.5 
                rounded 
                shadow 
                text-xs 
                bg-[#262729] 
                text-white/70 
                transition
                hover:opacity-70
            `,
                isNotCurrentMonth && 'bg-transparent shadow-none text-white/60',
                isDateSelected && 'bg-green-500 text-white',
                !isRangeAvailable && 'pointer-events-none opacity-50',
                isToday && 'ring-green-500 ring-1',
            )}
            onClick={onClick}
        >
            {title}
        </button>
    )
}