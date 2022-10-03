const titleCase = (title, minorWords) => {
  if (!title) {
    return '';
  } else {
    let lowerCaseTitle = title.toLowerCase();
    let splittedTitle = lowerCaseTitle.split(' ');
    let titleCased = splittedTitle.map((word) => {
      if (minorWords && minorWords.toLowerCase().split(' ').includes(word)) {
        return word;
      } else {
        return word[0].toUpperCase() + word.substring(1, word.length);
      }
    });

    let joined = titleCased.join(' ');
    let first = joined[0][0].toUpperCase();
    return first + joined.substring(1, joined.length);
  }
};

export default titleCase;
