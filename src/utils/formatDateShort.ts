import { format, isThisYear, isToday } from 'date-fns';

export function formatDateShort(date: Date) {
    if (isToday(date)) {
        return format(date, 'HH:mm');
    } else if (isThisYear(date)) {
        return format(date, 'MM/dd');
    } else {
        return format(date, 'yyyy MM/dd');
    }
}
