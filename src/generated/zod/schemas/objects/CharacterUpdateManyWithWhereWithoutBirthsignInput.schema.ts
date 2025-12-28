import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutBirthsignInputObjectSchema as CharacterUncheckedUpdateManyWithoutBirthsignInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutBirthsignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutBirthsignInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutBirthsignInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutBirthsignInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutBirthsignInput>;
export const CharacterUpdateManyWithWhereWithoutBirthsignInputObjectZodSchema = makeSchema();
