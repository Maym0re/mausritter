import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereInputObjectSchema } from './DiceRollLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional()
}).strict();
export const DiceRollLogListRelationFilterObjectSchema: z.ZodType<Prisma.DiceRollLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogListRelationFilter>;
export const DiceRollLogListRelationFilterObjectZodSchema = makeSchema();
