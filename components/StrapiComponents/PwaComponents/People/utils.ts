export const generatePeopleCardGridLayout = (person: any) => {
  if (person?.workshops?.length) {
    return 'grid-cols-6';
  } else return 'grid-cols-2';
}

export function reorderPersonFlex(isExpanded: any, index: any) {
  if (!isExpanded) {

    let flexItem = document.querySelector(`#card_grid_${index}`) as HTMLBaseElement;
    const flexContainer = document.querySelector('#card_grid_container') as HTMLBaseElement;
    const flexItems = Array.from(flexContainer.children);
    const currentOrder = parseInt(flexItem.style.order);

    const itemRect = flexItem.getBoundingClientRect();
    const rowItems = flexItems.filter((item: any) => {
      const itemOrder = parseInt(item.style.order);
      const rect = item.getBoundingClientRect();
      return rect.top === itemRect.top && itemOrder > 0;
    });

    if (rowItems[rowItems.length - 1] === flexItem && currentOrder > 1) {
      const previousOrder = currentOrder - 1;
      let flex = document.getElementById('card_grid_container')?.childNodes
      if (flex) {
        const previousElement = Array.from(flex)
          .find((item: any) => parseInt(item.style.order) === previousOrder) as any;
        if (previousElement) {
          flexItem.style.order = previousOrder.toString();
          previousElement.style.order = currentOrder.toString();
        }
      }
    }
  } else {
    const flexContainer = document.querySelector('#card_grid_container') as HTMLBaseElement;
    if (flexContainer) {
      const flexItems = Array.from(flexContainer.children);
      flexItems.forEach((i: any, index: any) => {
        i.style.order = index
      })
    }
  }
}