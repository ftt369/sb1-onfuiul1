import React from 'react';
import { Message } from '../../../types/ai';
import { formatDistanceToNow } from '../../../utils/dateUtils';

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) return null;

  return (
    <div className="space-y-4 mb-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.role === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <p className="whitespace-pre-wrap">{message.content}</p>
            <span className="text-xs opacity-75 mt-1 block">
              {formatDistanceToNow(message.timestamp)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}