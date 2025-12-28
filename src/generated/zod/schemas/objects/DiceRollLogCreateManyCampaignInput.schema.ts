import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  notation: z.string(),
  total: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const DiceRollLogCreateManyCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateManyCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyCampaignInput>;
export const DiceRollLogCreateManyCampaignInputObjectZodSchema = makeSchema();
