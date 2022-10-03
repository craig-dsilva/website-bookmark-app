import React, { useState } from 'react';
import Website from './Website';
import data from '../data/websites.json';

const List = () => {
  const [websites, setWebsites] = useState(data);
  return (
    <div>
      <ul>
        {websites.map((website) => {
          return <Website id={website.id} url={website.url} />;
        })}
      </ul>
    </div>
  );
};

export default List;
