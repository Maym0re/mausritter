import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatCountOutputTypeCountCharactersArgsObjectSchema as CoatCountOutputTypeCountCharactersArgsObjectSchema } from './CoatCountOutputTypeCountCharactersArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => CoatCountOutputTypeCountCharactersArgsObjectSchema)]).optional()
}).strict();
export const CoatCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CoatCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CoatCountOutputTypeSelect>;
export const CoatCountOutputTypeSelectObjectZodSchema = makeSchema();
