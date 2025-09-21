import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUncheckedCreateNestedManyWithoutBirthsignInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  sign: z.string(),
  disposition: z.string(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutBirthsignInputObjectSchema)
}).strict();
export const BirthsignUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BirthsignUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignUncheckedCreateInput>;
export const BirthsignUncheckedCreateInputObjectZodSchema = makeSchema();
