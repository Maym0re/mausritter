import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryWhereInputObjectSchema as DiceRollEntryWhereInputObjectSchema } from './DiceRollEntryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollEntryWhereInputObjectSchema).optional()
}).strict();
export const DiceRollLogCountOutputTypeCountEntriesArgsObjectSchema = makeSchema();
export const DiceRollLogCountOutputTypeCountEntriesArgsObjectZodSchema = makeSchema();
