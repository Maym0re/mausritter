import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema as CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const CampaignPlayerIncludeObjectSchema: z.ZodType<Prisma.CampaignPlayerInclude> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerInclude>;
export const CampaignPlayerIncludeObjectZodSchema = makeSchema();
