export const dateToString = (date: Date) => {
    const zeroPad = (value: number) => `${value}`.padStart(2, '0')
    return `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`
}