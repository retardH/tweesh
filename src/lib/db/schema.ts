import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  text: text('text').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  userId: varchar('userId', { length: 255 }).notNull(),
});
