import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './app/styles.css';
import './app/experience.css';
import './app/course.css';
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>);
