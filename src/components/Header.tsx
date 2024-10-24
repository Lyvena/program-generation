import React from 'react';
import { Brain, Settings, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">AI-PGF Program Generator</h1>
        </Link>
        <div className="flex space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          <Link to="/auth">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;