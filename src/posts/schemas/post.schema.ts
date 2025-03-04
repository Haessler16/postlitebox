import { Schema, Document } from 'mongoose';

// Class for the schema (used as a value)
export class Post extends Document {
  title: string;
  image: string;
  tags: string;
  readTime: number;
  authorName: string;
  authorImage: string;
  createdAt: Date;
}

// Schema definition (value)
export const PostSchema = new Schema<Post>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: String, required: true },
  readTime: { type: Number, required: true },
  authorName: { type: String, required: true },
  authorImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Interface for the document type (used as a type)
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PostDocument extends Post {}
