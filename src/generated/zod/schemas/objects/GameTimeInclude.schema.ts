import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignArgsObjectSchema } from './CampaignArgs.schema'

const makeSchema = () => z.object({
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional()
}).strict();
export const GameTimeIncludeObjectSchema: z.ZodType<Prisma.GameTimeInclude> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeInclude>;
export const GameTimeIncludeObjectZodSchema = makeSchema();
