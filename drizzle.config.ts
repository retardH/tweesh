import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      'postgresql://retardH:t5eHGDpJZ3hT@ep-aged-bread-a1l31rao.ap-southeast-1.aws.neon.tech/tweep?sslmode=require',
  },
} satisfies Config;
