import { env } from '../config/env';
import { AI_CONFIG } from './aiConfig';
import { SYSTEM_PROMPTS } from '../constants/aiPrompts';
import { AIError } from '../utils/errors';

export async function getAIAssistance(prompt: string): Promise<string> {
  if (!env.GROK_API_KEY) {
    throw new AIError('API key not configured');
  }

  try {
    const response = await fetch(AI_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.GROK_API_KEY}`
      },
      body: JSON.stringify({
        model: AI_CONFIG.MODEL,
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPTS.WORKERS_COMP
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: AI_CONFIG.TEMPERATURE,
        max_tokens: AI_CONFIG.MAX_TOKENS
      })
    });

    if (!response.ok) {
      throw new AIError(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new AIError('Invalid response format from API');
    }

    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof AIError) {
      throw error;
    }
    throw new AIError('Failed to get AI assistance', { cause: error });
  }
}