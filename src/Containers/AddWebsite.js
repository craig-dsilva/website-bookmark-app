import React, { useState } from 'react';

const AddWebsite = ({ handleAdd }) => {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState(false);

  const handleSubmit = () => {
    if (url === '' || !url.includes('.')) {
      setUrlError(true);
    } else {
      setUrlError(true);
      handleAdd(url);
      setUrl('');
    }
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
      {urlError && <p>Please enter a valid URL</p>}
    </div>
  );
};

export default AddWebsite;
