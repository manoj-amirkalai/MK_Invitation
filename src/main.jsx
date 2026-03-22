// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Invitation from './Invitation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Invitation />
  </StrictMode>
);
