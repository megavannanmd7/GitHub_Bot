import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LlmService {
  constructor(private readonly configService: ConfigService) {}

  async askLLM(prompt: string): Promise<string> {
    const GEMINI_API_KEY = this.configService.get<string>('GEMINI_API_KEY');

    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set in the environment.');
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        },
      );

      const result = await response.json();
      console.log('Gemini API Raw Response:', JSON.stringify(result, null, 2));

      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      return text || 'No summary generated.';
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  }
}