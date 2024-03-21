import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

export default function Calendario() {
    const localizer = dayjsLocalizer(dayjs)
    const eventos = [
        {
            start: dayjs('2024-04-06T20:00:00').toDate(),
            end: dayjs('2024-04-06T21:00:00').toDate(),
            title: "Concierto de Taiko"
        },
        {
            start: dayjs('2024-06-22T10:00:00').toDate(),
            end: dayjs('2024-06-23T18:00:00').toDate(),
            title: "Feria Nikkei"
        },
        {
            start: dayjs('2024-07-07T10:00:00').toDate(),
            end: dayjs('2024-07-07T17:00:00').toDate(),
            title: "Tanabata"
        },
        {
            start: dayjs('2024-07-28T10:00:00').toDate(),
            end: dayjs('2024-07-28T18:00:00').toDate(),
            title: "Feria Nikkei"
        }
    ]
    return (
        <Calendar
            localizer={localizer}
            events={eventos}
            views={['month', 'week', 'day']}
            defaultView='month'
        />
    )
}
