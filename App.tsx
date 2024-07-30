import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {api} from './src/api';
import {HomeScreen} from './src/screens/HomeScreen.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Navigation} from './src/navigation/Navigation.tsx';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
