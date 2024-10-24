import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-8">
            <Brain className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to AI-PGF
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Generate powerful programs with the help of artificial intelligence. Transform your ideas into reality.
          </p>
          <Link to="/auth">
            <Button className="text-lg px-8 py-6 rounded-full">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;