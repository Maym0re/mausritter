import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryWhereInputObjectSchema } from './DiceRollEntryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DiceRollEntryWhereInputObjectSchema).optional(),
  some: z.lazy(() => DiceRollEntryWhereInputObjectSchema).optional(),
  none: z.lazy(() => DiceRollEntryWhereInputObjectSchema).optional()
}).strict();
export const DiceRollEntryListRelationFilterObjectSchema: z.ZodType<Prisma.DiceRollEntryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryListRelationFilter>;
export const DiceRollEntryListRelationFilterObjectZodSchema = makeSchema();
