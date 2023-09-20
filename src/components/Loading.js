import React from 'react';
import './Loading.css';

const Loading = () => {
    
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Carregando...</p>
    </div>
  );
}

export default Loading;
