import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  season: SeasonNameSchema,
  description: z.string(),
  effect: z.string().optional().nullable()
}).strict();
export const SeasonalEventUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SeasonalEventUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventUncheckedCreateInput>;
export const SeasonalEventUncheckedCreateInputObjectZodSchema = makeSchema();
