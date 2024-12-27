import React, { createContext, useContext, ReactNode } from 'react';
import { useAIChat } from '../../../hooks/useAIChat';
import { Message } from '../../../types/ai';

interface AIContextType {
  messages: Message[];
  loading: boolean;
  sendMessage: (content: string) => Promise<void>;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export function AIProvider({ children }: { children: ReactNode }) {
  const aiChat = useAIChat();
  
  return (
    <AIContext.Provider value={aiChat}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
}