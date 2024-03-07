'use server';
import db from '../db';
import { posts } from '../db/schema';

export const createNewPost = async () => {
  console.log('inserting');
  const result = await db.insert(posts).values({ title: 'Testing Two' });
  console.log('ddd === ', result);
};
