import React from 'react';
import ProgramGenerator from '@/components/ProgramGenerator';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid gap-6">
          <ProgramGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;