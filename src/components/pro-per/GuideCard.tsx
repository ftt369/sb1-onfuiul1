import React from 'react';
import { BookOpen } from 'lucide-react';

interface GuideCardProps {
  title: string;
  description: string;
  link: string;
}

export function GuideCard({ title, description, link }: GuideCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center"
      >
        Learn More →
      </a>
    </div>
  );
}