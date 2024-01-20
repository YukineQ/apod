'use client'

import React from 'react'

import { Calendar } from './calendar';
import { getDefaultEndDate, getDefaultStartDate, isDatesEqual } from '@/utils/date';

type UseDateRangePickerOptions = Pick<DateRangePicker, 'startRange' | 'endRange' | 'onChange'>

export type DateSelection = {
    startDate: Date;
    endDate: Date | null;
}

function useDateRangePicker({
    onChange,
    startRange,
    endRange,
}: UseDateRangePickerOptions) {
    const [dateSelection, setDateSelection] = React.useState<DateSelection>({
        startDate: startRange,
        endDate: endRange,
    })

    const onDateChange = React.useCallback(
        (changedDate: Date) => {
            const { startDate, endDate } = dateSelection
            let newSelection: DateSelection = dateSelection;

            if (endDate || isDatesEqual(startDate, changedDate)) {
                newSelection = { startDate: changedDate, endDate: null }
                setDateSelection({ ...newSelection })
            } else {
                if (changedDate < startDate) {
                    newSelection = { startDate: changedDate, endDate: startDate }
                    setDateSelection({ ...newSelection })
                } else {
                    newSelection = { ...dateSelection, endDate: changedDate }
                    setDateSelection({ ...newSelection })
                }
            }

            if (onChange) {
                onChange({ ...newSelection })
            }
        },
        [dateSelection.endDate, dateSelection.startDate, setDateSelection, onChange]
    )

    return {
        dateSelection: dateSelection,
        handlers: { onDateChange }
    }
}

type DateRangePicker = {
    onChange: (state: DateSelection) => void;
    startDate?: Date;
    endDate?: Date;
    isSundayFirst?: boolean;
    startRange: Date;
    endRange: Date | null;
}

export const DateRangePicker = ({
    onChange,
    startDate = getDefaultStartDate(),
    endDate = getDefaultEndDate(),
    isSundayFirst = false,
    startRange,
    endRange,
}: DateRangePicker) => {
    const {
        dateSelection,
        handlers: { onDateChange }
    } = useDateRangePicker({
        startRange,
        endRange,
        onChange
    })

    return (
        <Calendar
            date={dateSelection}
            onChange={onDateChange}
            startDate={startDate}
            endDate={endDate}
            isSundayFirst={isSundayFirst}
        />
    )
}