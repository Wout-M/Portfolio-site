import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import AnimatedCursor from "react-animated-cursor";
import App from './App.jsx';

import '@radix-ui/themes/styles.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Theme className='test' accentColor='violet'>
            <App className='app' />
            <AnimatedCursor
                innerSize={8}
                outerSize={60}
                innerScale={1}
                outerScale={1.5}
                outerAlpha={0}
                innerStyle={{
                    backgroundColor: 'var(--accent-8)'
                }}
                outerStyle={{
                    backgroundColor: "var(--gray-12) ",
                    mixBlendMode: 'exclusion'
                }} />
        </Theme>
    </React.StrictMode>
);
