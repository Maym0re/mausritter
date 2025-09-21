import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateManyPlayerInputObjectSchema } from './CharacterCreateManyPlayerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CharacterCreateManyPlayerInputObjectSchema), z.lazy(() => CharacterCreateManyPlayerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CharacterCreateManyPlayerInputEnvelopeObjectSchema: z.ZodType<Prisma.CharacterCreateManyPlayerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateManyPlayerInputEnvelope>;
export const CharacterCreateManyPlayerInputEnvelopeObjectZodSchema = makeSchema();
