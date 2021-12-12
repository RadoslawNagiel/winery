export const searchArrayByName = (text: string, elementsArray: any[]) => {
  if (text === ``) {
    return elementsArray;
  } else {
    const textArr = text.split(` `);
    const elementsToShow = [];

    for (const el of elementsArray) {
      const wineText = el.name.toLowerCase();
      let similar = true;
      for (const text2 of textArr) {
        if (!wineText.includes(text2)) {
          similar = false;
          break;
        }
      }
      if (similar) {
        elementsToShow.push(el);
      }
    }
    return elementsToShow;
  }
};
