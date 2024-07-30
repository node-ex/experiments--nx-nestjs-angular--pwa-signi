import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SigniModule } from './signi/signi.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import type { Response } from 'express';

@Module({
  imports: [
    ConfigModule.forRoot({
      // No need to import in other modules
      isGlobal: true,
      expandVariables: true,
      // cache: true,
    }),
    SigniModule,
    // https://docs.nestjs.com/recipes/serve-static
    // https://github.com/nestjs/serve-static
    // https://github.com/nestjs/serve-static/blob/master/lib/interfaces/serve-static-options.interface.ts
    ServeStaticModule.forRoot({
      rootPath: path.join(
        process.cwd(),
        'dist',
        'apps',
        'app-angular-1',
        'browser',
      ),
      serveStaticOptions: {
        setHeaders: (res: Response, url) => {
          res.set({ 'X-Custom-Header': 'some-value' });
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
