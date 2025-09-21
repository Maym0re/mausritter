import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyBirthsignInputObjectSchema } from './CharacterCreateManyBirthsignInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CharacterCreateManyBirthsignInputObjectSchema), z.lazy(() => CharacterCreateManyBirthsignInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyBirthsignInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyBirthsignInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateManyBirthsignInputEnvelope>;
export const CharacterCreateManyBirthsignInputEnvelopeObjectZodSchema = makeSchema();
