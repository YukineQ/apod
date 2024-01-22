import {
    CALENDAR_MONTHS,
    CALENDAR_WEEKS,
    THIS_MONTH,
    THIS_YEAR
} from "@/features/calendar/constants/date";
import { DateSelection } from "@/features/calendar";

export type DateState = {
    month: number;
    year: number;
}

export const getFirstMonthDay = (
    monthNumber = THIS_MONTH,
    year = THIS_YEAR
) => {
    return new Date(year, monthNumber, 1)
}

export const getLastMonthDay = (
    monthNumber = THIS_MONTH,
    year = THIS_YEAR
) => {
    return new Date(year, monthNumber + 1, 0)
}

export const getCalendarData = (
    monthNumber: number,
    year: number,
    isSundayFirst: boolean = false
) => {
    const firstMonthDay = getFirstMonthDay(monthNumber, year)

    let daysFromPrevMonth: number
    if (isSundayFirst) {
        daysFromPrevMonth = firstMonthDay.getDay()
    } else {
        daysFromPrevMonth = firstMonthDay.getDay() - 1

        if (daysFromPrevMonth === -1 && firstMonthDay.getDate() === 1) {
            daysFromPrevMonth = 6;
        } else if (daysFromPrevMonth === -1) {
            daysFromPrevMonth = 1;
        }
    }

    const monthDates = new Array(CALENDAR_WEEKS * 7)
        .fill(0)
        .map((_, index) => {
            const currentDate = new Date(firstMonthDay)
            currentDate.setDate(firstMonthDay.getDate() + index - daysFromPrevMonth)
            return currentDate
        })

    return monthDates
}

export const extractDateState = (date: DateSelection) => {
    const { startDate } = date
    return {
        month: startDate.getMonth(),
        year: startDate.getFullYear(),
    }
}

export const formatDateState = (
    dataState: DateState
) => {
    const { month, year } = dataState

    const monthString =
        Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month, 11))]

    return `${monthString} ${year}`
}