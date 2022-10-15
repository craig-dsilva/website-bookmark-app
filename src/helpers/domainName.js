import titleCase from './titleCase';

const firstHalf = (url) => {
  if (url.includes('http://')) {
    return url.split('http://')[1];
  } else if (url.includes('https://')) {
    return url.split('https://')[1];
  } else if (url.includes('www.')) {
    return url.split('www.')[1];
  }
  return url;
};

const domainName = (url) => {
  const splittedFirstHalf = firstHalf(url).split('.');
  if (splittedFirstHalf[0] === 'www') {
    splittedFirstHalf.splice(0, 1);
  }
  if (splittedFirstHalf.length > 2 && splittedFirstHalf[1] !== 'co') {
    return titleCase(splittedFirstHalf[1])
  }
  return titleCase(splittedFirstHalf[0])
};

export default domainName;
