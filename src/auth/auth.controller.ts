import { Controller, Get, Req,Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
  @Get('github')
  @UseGuards(AuthGuard('github'))
  githubLogin() {}

  @Get('github/callback')
@UseGuards(AuthGuard('github'))
githubCallback(@Req() req, @Res() res) {
  const { accessToken, profile } = req.user;
  // For now, redirect to frontend with token in URL (simple demo)
  return res.redirect(`http://localhost:5500?token=${accessToken}`);
}

}
