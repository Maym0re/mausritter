import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignCountOutputTypeCountCharactersArgsObjectSchema as BirthsignCountOutputTypeCountCharactersArgsObjectSchema } from './BirthsignCountOutputTypeCountCharactersArgs.schema'

const makeSchema = () => z.object({
  characters: z.union([z.boolean(), z.lazy(() => BirthsignCountOutputTypeCountCharactersArgsObjectSchema)]).optional()
}).strict();
export const BirthsignCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.BirthsignCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCountOutputTypeSelect>;
export const BirthsignCountOutputTypeSelectObjectZodSchema = makeSchema();
