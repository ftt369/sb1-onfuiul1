import React from 'react';
import { AIProvider } from './ai/AIContext';
import { AIHeader } from './ai/AIHeader';
import { MessageList } from './ai/MessageList';
import { QuestionInput } from './ai/QuestionInput';
import { SuggestedQuestions } from './ai/SuggestedQuestions';
import { ErrorMessage } from './ai/ErrorMessage';
import { useAI } from './ai/AIContext';
import { suggestedQuestions } from '../../data/suggestedQuestions';

function AIAssistantContent() {
  const { messages, loading, error, sendMessage } = useAI();
  const [question, setQuestion] = React.useState('');

  const handleSubmit = async () => {
    if (!question.trim()) return;
    await sendMessage(question);
    setQuestion('');
  };

  const handleSuggestedQuestion = (text: string) => {
    setQuestion(text);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <AIHeader />
      {error && <ErrorMessage message={error} />}
      <MessageList messages={messages} />
      <QuestionInput
        value={question}
        onChange={setQuestion}
        onSubmit={handleSubmit}
        loading={loading}
      />
      {messages.length === 0 && (
        <SuggestedQuestions
          questions={suggestedQuestions}
          onQuestionClick={handleSuggestedQuestion}
        />
      )}
    </div>
  );
}

export function AIAssistant() {
  return (
    <AIProvider>
      <AIAssistantContent />
    </AIProvider>
  );
}