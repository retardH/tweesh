import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  content: text('content').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  authorId: varchar('authorId', { length: 255 }).notNull(),
});
