import React, { useState } from 'react';
import AddWebsite from './AddWebsite';
import Website from './Website';
import data from '../data/websites.json';

const List = () => {
  const [websites, setWebsites] = useState(data);

  const addWebsite = (url) => {
    const website = { id: websites.length, url: url };
    setWebsites([...websites, website]);
  };

  return (
    <div>
      <AddWebsite handleAdd={addWebsite} />
      <ul>
        {websites.map((website) => {
          return <Website key={website.id} url={website.url} />;
        })}
      </ul>
    </div>
  );
};

export default List;
