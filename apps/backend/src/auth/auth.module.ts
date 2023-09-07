import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { IDPModule } from 'src/idp/idp.module';
import constants from 'src/idp/constants';

@Module({
  imports: [IDPModule.forRoot(constants.IDENTITY_PROVIDER_FIREBASE)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
