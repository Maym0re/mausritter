import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCountOutputTypeCountCharactersArgsObjectSchema as ConditionCountOutputTypeCountCharactersArgsObjectSchema } from './ConditionCountOutputTypeCountCharactersArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => ConditionCountOutputTypeCountCharactersArgsObjectSchema)]).optional()
}).strict();
export const ConditionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ConditionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCountOutputTypeSelect>;
export const ConditionCountOutputTypeSelectObjectZodSchema = makeSchema();
