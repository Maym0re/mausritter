import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './ConditionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConditionWhereInputObjectSchema).optional()
}).strict();
export const CharacterCountOutputTypeCountConditionsArgsObjectSchema = makeSchema();
export const CharacterCountOutputTypeCountConditionsArgsObjectZodSchema = makeSchema();
