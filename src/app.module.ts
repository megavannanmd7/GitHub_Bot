import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { GithubModule } from './github/github.module';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes env variables accessible everywhere
    }),
    AuthModule,
    ChatModule,
    GithubModule,
    LlmModule,
  ],
})
export class AppModule {}
