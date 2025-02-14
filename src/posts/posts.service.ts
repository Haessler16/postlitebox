import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, Post } from './schemas/post.schema'; // Use the INTERFACE
import { CreatePostDto } from './dto/create-post.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>, // Use Post.name and PostDocument
  ) {}

  async findAll(paginationDto: PaginationDto): Promise<PostDocument[]> {
    const { limit, offset } = paginationDto;
    return this.postModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string): Promise<PostDocument> {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async create(createPostDto: CreatePostDto): Promise<PostDocument> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }
}
