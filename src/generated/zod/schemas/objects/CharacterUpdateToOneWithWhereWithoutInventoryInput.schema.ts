import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema';
import { CharacterUpdateWithoutInventoryInputObjectSchema } from './CharacterUpdateWithoutInventoryInput.schema';
import { CharacterUncheckedUpdateWithoutInventoryInputObjectSchema } from './CharacterUncheckedUpdateWithoutInventoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CharacterUpdateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutInventoryInputObjectSchema)])
}).strict();
export const CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema: z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutInventoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateToOneWithWhereWithoutInventoryInput>;
export const CharacterUpdateToOneWithWhereWithoutInventoryInputObjectZodSchema = makeSchema();
