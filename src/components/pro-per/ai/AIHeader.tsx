import React from 'react';
import { MessageSquare, Info } from 'lucide-react';

export function AIHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <MessageSquare className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">AI Legal Assistant</h3>
      </div>
      <button
        className="text-gray-400 hover:text-gray-600"
        title="Get help with your workers' compensation case"
      >
        <Info className="w-5 h-5" />
      </button>
    </div>
  );
}