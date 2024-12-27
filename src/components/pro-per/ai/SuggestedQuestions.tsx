import React from 'react';
import { SuggestedQuestion } from '../../../types/ai';
import { HelpCircle } from 'lucide-react';

interface SuggestedQuestionsProps {
  questions: SuggestedQuestion[];
  onQuestionClick: (question: string) => void;
}

export function SuggestedQuestions({ questions, onQuestionClick }: SuggestedQuestionsProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center mb-3">
        <HelpCircle className="w-4 h-4 text-gray-400 mr-2" />
        <h4 className="text-sm font-medium text-gray-700">Suggested Questions</h4>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onQuestionClick(question.text)}
            className="text-left text-sm text-gray-600 hover:text-blue-500 hover:bg-gray-50 p-2 rounded-md transition-colors"
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
}