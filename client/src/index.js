import {createRoot} from 'react-dom/client';
import App from './App';
import { ContentCopy } from '@mui/icons-material';
import ContextProvider from './context/ContextProvider';


createRoot(document.getElementById('root')).render(
<ContextProvider>
    <App />
</ContextProvider>
);