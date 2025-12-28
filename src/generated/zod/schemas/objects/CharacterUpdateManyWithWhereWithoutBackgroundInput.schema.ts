import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutBackgroundInputObjectSchema as CharacterUncheckedUpdateManyWithoutBackgroundInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutBackgroundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutBackgroundInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutBackgroundInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutBackgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutBackgroundInput>;
export const CharacterUpdateManyWithWhereWithoutBackgroundInputObjectZodSchema = makeSchema();
