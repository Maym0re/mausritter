import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutCoatInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutCoatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutCoatInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutCoatInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutCoatInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutCoatInput>;
export const CharacterUpdateManyWithWhereWithoutCoatInputObjectZodSchema = makeSchema();
