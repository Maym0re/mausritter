import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyCoatInputObjectSchema } from './CharacterCreateManyCoatInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CharacterCreateManyCoatInputObjectSchema), z.lazy(() => CharacterCreateManyCoatInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyCoatInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyCoatInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateManyCoatInputEnvelope>;
export const CharacterCreateManyCoatInputEnvelopeObjectZodSchema = makeSchema();
