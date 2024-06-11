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

// copy text
export const copy = async (textToCopy) => {
  console.log(textToCopy);
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(textToCopy);
  } else {
    document.execCommand("copy", true, textToCopy);
  }
};

// change style when Copy

export const clickCopyStyle = (setState, style1, style2) => {
  setState(style1);
  setTimeout(() => {
    setState(style2);
  }, 300);
};
