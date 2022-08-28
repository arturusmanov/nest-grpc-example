import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { AppController } from './app.controller';

@Module({
  imports: [HeroModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
