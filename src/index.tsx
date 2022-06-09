import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.less';
import { inintLocalStorage } from './utils/tools';
inintLocalStorage({ theme: 'light', platform: 'theme-tool' });
createRoot(document.querySelector('#root') as Element).render(<App />);
