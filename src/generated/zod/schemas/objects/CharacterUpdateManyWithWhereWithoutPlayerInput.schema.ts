import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema as CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema as CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutPlayerInputObjectSchema as CharacterUncheckedUpdateManyWithoutPlayerInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutPlayerInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutPlayerInput>;
export const CharacterUpdateManyWithWhereWithoutPlayerInputObjectZodSchema = makeSchema();
