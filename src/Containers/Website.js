import React from 'react';
import domainName from '../helpers/domainName';

const Website = ({ id, url }) => {
  return (
    <li key={id}>
      <p>Title: {domainName(url)}</p>
      <p>
        URL: <a href={url}>{url}</a>
      </p>
    </li>
  );
};

export default Website;
