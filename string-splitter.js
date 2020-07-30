stringSplitter = (str, sep) => {
  let i = str.indexOf(sep);
  if (!str[i]) {
    return str;
  } else {
    return str.slice(0, i) + stringSplitter(str.slice(i + 1, str.length), sep);
  }
};
