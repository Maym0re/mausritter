import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereInputObjectSchema } from './DiceRollLogWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional()
}).strict();
export const DiceRollLogScalarRelationFilterObjectSchema: z.ZodType<Prisma.DiceRollLogScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogScalarRelationFilter>;
export const DiceRollLogScalarRelationFilterObjectZodSchema = makeSchema();
