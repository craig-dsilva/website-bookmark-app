import React from 'react';
import domainName from '../helpers/domainName';

const Website = ({ url }) => {
  return (
    <div>
      <p>Title: {domainName(url)}</p>
      <p>
        URL: <a href={url}>{url}</a>
      </p>
    </div>
  );
};

export default Website;
