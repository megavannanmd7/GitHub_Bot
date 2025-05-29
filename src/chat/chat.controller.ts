import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async handleChat(@Body() body: { token: string; message: string }) {
    console.log('Received POST /chat with body:', body);
    return this.chatService.processUserQuery(body.token, body.message);
  }
}