// main.tsx ou index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import themePersonalizado from './theme';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={themePersonalizado}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}
