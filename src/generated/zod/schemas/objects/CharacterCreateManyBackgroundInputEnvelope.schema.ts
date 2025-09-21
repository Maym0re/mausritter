import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyBackgroundInputObjectSchema } from './CharacterCreateManyBackgroundInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CharacterCreateManyBackgroundInputObjectSchema), z.lazy(() => CharacterCreateManyBackgroundInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyBackgroundInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyBackgroundInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateManyBackgroundInputEnvelope>;
export const CharacterCreateManyBackgroundInputEnvelopeObjectZodSchema = makeSchema();
