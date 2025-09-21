import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutGameTimeInputObjectSchema } from './CampaignCreateNestedOneWithoutGameTimeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rounds: z.number().int().optional(),
  turns: z.number().int().optional(),
  watches: z.number().int().optional(),
  days: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutGameTimeInputObjectSchema)
}).strict();
export const GameTimeCreateInputObjectSchema: z.ZodType<Prisma.GameTimeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeCreateInput>;
export const GameTimeCreateInputObjectZodSchema = makeSchema();
