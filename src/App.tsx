import React from 'react';
import { Layout } from './components/layout/Layout';
import { AIAssistant } from './components/pro-per/AIAssistant';
import { CaseStatus } from './components/pro-per/CaseStatus';
import { GuideCard } from './components/pro-per/GuideCard';
import { UserProfile } from './components/profile/UserProfile';

export function App() {
  const caseData = {
    caseNumber: "ADJ12345678",
    status: "Pending Initial Hearing",
    nextHearing: "March 15, 2024 at 9:00 AM",
    documents: [
      { name: "Application for Adjudication of Claim", dueDate: "March 1, 2024" },
      { name: "Medical Records Authorization", dueDate: "March 5, 2024" }
    ]
  };

  const guides = [
    {
      title: "Filing Your Claim",
      description: "Step-by-step guide on how to properly file your workers' compensation claim.",
      link: "#filing-guide"
    },
    {
      title: "Understanding Your Rights",
      description: "Learn about your rights as an injured worker in California.",
      link: "#rights-guide"
    }
  ];

  return (
    <Layout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pro Per Portal</h2>
        <p className="mt-1 text-sm text-gray-500">
          Get assistance with your workers' compensation case
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <UserProfile />
          <CaseStatus {...caseData} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map((guide, index) => (
              <GuideCard key={index} {...guide} />
            ))}
          </div>
        </div>
        <AIAssistant />
      </div>
    </Layout>
  );
}