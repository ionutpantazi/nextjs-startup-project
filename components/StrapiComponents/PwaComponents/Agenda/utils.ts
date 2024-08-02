

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

export function sortAgendaItemsByStartDate(agendaItems: any): any {
  return agendaItems.sort((a: any, b: any) => {
    const dateA = new Date(a.start).getTime();
    const dateB = new Date(b.start).getTime();
    return dateA - dateB;
  });
}

export function removeMinutes(momentTime: string) {
  return momentTime.replace(/(:00)/g, '');
}