import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundCountOutputTypeCountCharactersArgsObjectSchema as BackgroundCountOutputTypeCountCharactersArgsObjectSchema } from './BackgroundCountOutputTypeCountCharactersArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => BackgroundCountOutputTypeCountCharactersArgsObjectSchema)]).optional()
}).strict();
export const BackgroundCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BackgroundCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCountOutputTypeSelect>;
export const BackgroundCountOutputTypeSelectObjectZodSchema = makeSchema();
