import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import ProgramGenerator from '../components/ProgramGenerator';

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ProgramGenerator />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default Index;