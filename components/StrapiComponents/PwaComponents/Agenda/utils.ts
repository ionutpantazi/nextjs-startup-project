

export function removeTime(momentTime: string) {
  var index = momentTime.lastIndexOf('T')
  return momentTime.substring(0, index);
}

export const generateAgendaDatesArray = (agendaItems: any) => {
  const uniqueDatesArray: string | any[] = [];
  if (!agendaItems) return []
  agendaItems.forEach((item: any) => {
    let date = removeTime(item.start)
    if (!uniqueDatesArray.includes(date)) {
      uniqueDatesArray.push(date)
    }
  })
  return uniqueDatesArray
}