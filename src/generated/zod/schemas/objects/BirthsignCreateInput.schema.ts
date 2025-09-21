import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedManyWithoutBirthsignInputObjectSchema } from './CharacterCreateNestedManyWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sign: z.string(),
  disposition: z.string(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutBirthsignInputObjectSchema)
}).strict();
export const BirthsignCreateInputObjectSchema: z.ZodType<Prisma.BirthsignCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCreateInput>;
export const BirthsignCreateInputObjectZodSchema = makeSchema();
