import React, { useState } from 'react';

const AddWebsite = ({ handleAdd }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (url === '') {
      return;
    }
    handleAdd(url);
    setUrl('');
  };

  return (
    <div>
      <label htmlFor="url">URL</label>{' '}
      <input
        type="text"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddWebsite;
