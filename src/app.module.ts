import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hae:0ISm10tLzv5nrfJI@cluster0.uqphq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    PostsModule,
  ],
})
export class AppModule {}
