import {
    DateRangePicker,
    DateSelection
} from "@/features/calendar";

export const ApodFilter = ({
    state,
    setState
}: {
    state: DateSelection,
    setState: React.Dispatch<React.SetStateAction<DateSelection>>;
}) => {
    const handleChange = (date: DateSelection) => {
        const { startDate, endDate } = date

        if (!endDate) {
            setState({ startDate: startDate, endDate: startDate })
            return
        }

        setState({ startDate, endDate })
    }

    return (
        <DateRangePicker
            startRange={state.startDate}
            endRange={state.endDate}
            onChange={handleChange}
            endDate={new Date()}
        />
    )
}