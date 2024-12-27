import React from 'react';
import { Clock, Calendar, FileText } from 'lucide-react';

interface CaseStatusProps {
  caseNumber: string;
  status: string;
  nextHearing?: string;
  documents: Array<{ name: string; dueDate: string }>;
}

export function CaseStatus({ caseNumber, status, nextHearing, documents }: CaseStatusProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-medium text-gray-900">Case #{caseNumber}</h3>
        <p className="text-sm text-gray-500 mt-1">Current Status: {status}</p>
      </div>

      {nextHearing && (
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-gray-400 mr-2" />
          <div>
            <p className="text-sm font-medium text-gray-900">Next Hearing</p>
            <p className="text-sm text-gray-500">{nextHearing}</p>
          </div>
        </div>
      )}

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-900">Required Documents</h4>
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
            <div className="flex items-center">
              <FileText className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-700">{doc.name}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-sm text-gray-500">Due: {doc.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}