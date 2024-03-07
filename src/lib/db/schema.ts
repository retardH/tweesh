import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('name', { length: 255 }),
  createdAt: timestamp('createdAt').defaultNow(),
});
