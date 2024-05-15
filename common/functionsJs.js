// Crop textif its to long
export const cropText = (str, start, end) => {
  const startStr = str.slice(0, start);
  const endStr = str.slice(-end);

  const finalStr = startStr + "..." + endStr;

  return finalStr;
};

// return just part of website url

export const cutUrl = (url) => {
  const mainArray = url.split("/");

  for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i].includes(".")) {
      return mainArray[i];
    }
  }
};
//
