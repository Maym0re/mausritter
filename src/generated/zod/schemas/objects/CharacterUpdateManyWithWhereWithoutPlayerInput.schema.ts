import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutPlayerInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutPlayerInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutPlayerInput>;
export const CharacterUpdateManyWithWhereWithoutPlayerInputObjectZodSchema = makeSchema();
