export const isDatesEqual = (
    date1: Date | null,
    date2: Date | null
) => {
    if (!date1 || !date2) return false

    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    )
}

export const isInRange = (date: Date, startDate: Date, endDate?: Date | null) => {
    if (!endDate) return isDatesEqual(startDate, date)

    const dateWithoutTime = new Date(date.toDateString())
    console.log('compare', dateWithoutTime >= startDate && dateWithoutTime <= endDate)

    return dateWithoutTime >= startDate && dateWithoutTime <= endDate
}

export const getDefaultStartDate = () => {
    const today = new Date();
    const year = today.getFullYear() - 10;
    return new Date(year, 0, 1);
}

export const getDefaultEndDate = () => {
    const today = new Date();
    const year = today.getFullYear() + 10;
    return new Date(year, 11, 31);
}

export const isToday = (date: Date) => {
    const today = new Date()
    console.log('today', today)
    return isDatesEqual(date, today)
}

export const addDays = (date: Date, number: number) => {
    date.setDate(date.getDate() + number)
    return new Date(date)
}