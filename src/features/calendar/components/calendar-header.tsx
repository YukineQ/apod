import { IconButton } from "@/components/icon-button";
import { Icons } from "@/components/icons";

type CalendarHeaderProps = {
    title: string;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export const CalendarHeader = ({
    title,
    onNextClick,
    onPrevClick,
}: CalendarHeaderProps) => {
    return (
        <div className="flex justify-between items-center pb-2">
            <IconButton
                variant='rounded'
                onClick={onPrevClick}
                className="text-white inline-flex items-center justify-center"
            >
                <Icons.arrowLeft className="w-4 h-4" />
            </IconButton>
            <span className="text-sm text-white/80 font-medium">{title}</span>
            <IconButton
                variant='rounded'
                onClick={onNextClick}
                className="text-white inline-flex items-center justify-center"
            >
                <Icons.arrowRight className="w-4 h-4" />
            </IconButton>
        </div>
    )
}