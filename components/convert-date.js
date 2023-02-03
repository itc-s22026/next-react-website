import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConvertDate = ({ dateISO }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO('2022-05-07T01:00:00.000Z'), 'yyyy年MM月dd日', {
        locale: ja
      })}
    </time>
  )
}
export default ConvertDate
