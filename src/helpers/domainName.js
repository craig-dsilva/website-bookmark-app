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
  const firstRemoved = firstHalf(url);
  const lastRemoved =
    firstRemoved.split('.')[0] === 'www'
      ? firstRemoved.split('.')[1]
      : firstRemoved.split('.')[0];
  return titleCase(lastRemoved);
};

export default domainName;
