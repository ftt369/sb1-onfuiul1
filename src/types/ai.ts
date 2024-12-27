export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  category: 'claim' | 'medical' | 'benefits' | 'hearing';
}