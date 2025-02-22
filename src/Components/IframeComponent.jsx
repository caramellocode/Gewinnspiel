import React from 'react';

const IframeComponent = () => {
  return (
    <div className="w-full" style={{ marginBottom: -88, paddingBottom: 0 }}>
      <iframe 
        src="https://staging.gcli.li" 
        width="100%" 
        height="600px" 
        style={{ border: 'none', display: 'block' }} 
        title="Staging GCLI"
      ></iframe>
    </div>
  );
};

export default IframeComponent;