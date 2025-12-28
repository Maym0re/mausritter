import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCountOutputTypeCountInventoryArgsObjectSchema as CharacterCountOutputTypeCountInventoryArgsObjectSchema } from './CharacterCountOutputTypeCountInventoryArgs.schema';
import { CharacterCountOutputTypeCountConditionsArgsObjectSchema as CharacterCountOutputTypeCountConditionsArgsObjectSchema } from './CharacterCountOutputTypeCountConditionsArgs.schema'

const makeSchema = () => z.object({
  inventory: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeCountInventoryArgsObjectSchema)]).optional(),
  conditions: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeCountConditionsArgsObjectSchema)]).optional()
}).strict();
export const CharacterCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CharacterCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCountOutputTypeSelect>;
export const CharacterCountOutputTypeSelectObjectZodSchema = makeSchema();
