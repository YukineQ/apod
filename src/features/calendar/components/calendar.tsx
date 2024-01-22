import React from 'react'

import { CalendarGrid } from './calendar-grid'
import { CalendarHeader } from './calendar-header'
import { CalendarWeekHeader } from './calendar-week-header'
import { DateSelection } from './date-range-picker'
import {
    extractDateState,
    formatDateState,
    getCalendarData
} from '@/features/calendar/utils/calendar'

type UseCalendarNavigation = {
    date: DateSelection;
}

function useCalendarNavigation({
    date,
}: UseCalendarNavigation) {
    const [dateState, setDateState] = React.useState(() =>
        extractDateState(date)
    )

    React.useEffect(() => {
        setDateState(() => extractDateState(date))
    }, [date])

    const onPrevClick = React.useCallback(() => {
        const { month, year } = dateState
        const prevMonth = month > 0 ? month - 1 : 11
        const prevYear = month > 0 ? year : year - 1
        setDateState({ month: prevMonth, year: prevYear })
    }, [dateState, date])

    const onNextClick = React.useCallback(() => {
        const { month, year } = dateState
        const nextMonth = month < 11 ? month + 1 : 0
        const nextYear = month < 11 ? year : year + 1
        setDateState({ month: nextMonth, year: nextYear })
    }, [dateState, date])

    return {
        dateState,
        handlers: {
            onNextClick,
            onPrevClick,
        }
    }
}

type CalendarProps = {
    date: DateSelection;
    onChange: (date: Date) => void;
    startDate: Date;
    endDate: Date;
    isSundayFirst: boolean;
}

export const Calendar = ({
    date,
    onChange,
    startDate,
    endDate,
    isSundayFirst,
}: CalendarProps) => {
    const { dateState, handlers: { onNextClick, onPrevClick } } = useCalendarNavigation({ date })
    const calendarData = React.useMemo(
        () => getCalendarData(dateState.month, dateState.year),
        [dateState.month, dateState.year]
    )

    const headerTitle = formatDateState(dateState)

    return (
        <div className='w-fit'>
            <CalendarHeader
                title={headerTitle}
                onNextClick={onNextClick}
                onPrevClick={onPrevClick}
            />
            <CalendarWeekHeader isSundayFisrt={isSundayFirst} />
            <CalendarGrid
                datesArray={calendarData}
                currentDate={date}
                currentMonth={dateState.month}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
            />
        </div>
    )
}