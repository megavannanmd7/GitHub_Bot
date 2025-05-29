import { Injectable } from '@nestjs/common';
import { GithubService } from '../github/github.service';
import { LlmService } from '../llm/llm.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly githubService: GithubService,
    private readonly llmService: LlmService,
  ) {}

  async processUserQuery(token: string, message: string) {
    const repos = await this.githubService.getUserRepos(token);
    const prompt = `User asked: "${message}". Repos: ${JSON.stringify(repos, null, 2)}`;
    return this.llmService.askLLM(prompt);
  }
}
