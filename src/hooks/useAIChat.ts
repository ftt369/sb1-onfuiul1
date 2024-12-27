import { useState, useCallback } from 'react';
import { Message } from '../types/ai';
import { getAIAssistance } from '../services/ai';
import { AIError } from '../utils/errors';
import { v4 as uuidv4 } from 'uuid';

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const response = await getAIAssistance(content);
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = error instanceof AIError 
        ? error.message 
        : 'An unexpected error occurred';
      
      setError(errorMessage);
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    messages,
    loading,
    error,
    sendMessage
  };
}