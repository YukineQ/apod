import { formatDate } from "@/utils/format";
import { CalendarDay } from "./calendar-day"
import { DateSelection } from "./date-range-picker";

type CalendarGridProps = {
    currentDate: DateSelection;
    currentMonth: number;
    onChange: (changedDate: Date) => void;
    datesArray: Date[];
    startDate: Date;
    endDate: Date;
}

export const CalendarGrid = ({
    datesArray,
    currentMonth,
    currentDate,
    onChange,
    startDate,
    endDate,
}: CalendarGridProps) => {
    return (
        <div className="grid grid-cols-7">
            {datesArray.map((date, _) => (
                <CalendarDay
                    key={formatDate(date)}
                    title={date.getDate()}
                    date={date}
                    selectedDate={currentDate}
                    selectedMonth={currentMonth}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                />
            ))}
        </div>
    )
}