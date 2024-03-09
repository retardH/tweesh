import { posts } from './db/schema';

export type NewPost = typeof posts.$inferInsert;

export type PostWithUser = typeof posts.$inferSelect;
