import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { GithubModule } from '../github/github.module';
import { LlmModule } from '../llm/llm.module';

@Module({
  imports: [GithubModule, LlmModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}