// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import WeddingInvitation from '../components/WeddingInvitation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{background : 'black',margin: '0',padding :'0'}}>
      <WeddingInvitation />
    </div>
  </StrictMode>
);
