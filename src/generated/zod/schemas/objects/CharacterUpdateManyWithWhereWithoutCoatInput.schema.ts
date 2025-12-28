import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutCoatInputObjectSchema as CharacterUncheckedUpdateManyWithoutCoatInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutCoatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutCoatInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutCoatInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutCoatInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutCoatInput>;
export const CharacterUpdateManyWithWhereWithoutCoatInputObjectZodSchema = makeSchema();
