import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional()
}).strict();
export const ConditionCountOutputTypeCountCharactersArgsObjectSchema = makeSchema();
export const ConditionCountOutputTypeCountCharactersArgsObjectZodSchema = makeSchema();
