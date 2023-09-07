import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Req,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IIdentityProviderService } from 'src/idp/types';
import constants from 'src/idp/constants';
import { Request, Response } from 'express';
import { DecodedIdToken } from 'firebase-admin/auth';
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(constants.IDENTITY_PROVIDER_SERVICE)
    private IDPService: IIdentityProviderService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async setCookie(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization;
    try {
      const user = await this.IDPService.verify(token);
      if (!user) {
        res.status(400).json({ msg: 'Login Failed' });
      }
      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 30000000),
      });
      res.status(200).json({ msg: 'Successfully login' });
    } catch (error) {
      res.status(400).json({ msg: 'Login Failed' });
    }
  }

  @Post('logout')
  async removeCookie(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('token');
    res.status(200).json({ msg: 'Log Out Successfully' });
  }

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    let token = '';
    try {
      token = req.cookies['token'];
      const user: DecodedIdToken = await this.IDPService.verify(token);
      return user;
    } catch {
      throw new HttpException('Not Authenticated', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
