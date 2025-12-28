import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCountOutputTypeCountEntriesArgsObjectSchema as DiceRollLogCountOutputTypeCountEntriesArgsObjectSchema } from './DiceRollLogCountOutputTypeCountEntriesArgs.schema'

const makeSchema = () => z.object({
  entries: z.union([z.boolean(), z.lazy(() => DiceRollLogCountOutputTypeCountEntriesArgsObjectSchema)]).optional()
}).strict();
export const DiceRollLogCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DiceRollLogCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCountOutputTypeSelect>;
export const DiceRollLogCountOutputTypeSelectObjectZodSchema = makeSchema();
