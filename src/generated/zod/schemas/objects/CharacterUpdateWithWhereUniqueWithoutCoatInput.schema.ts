import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutCoatInputObjectSchema } from './CharacterUpdateWithoutCoatInput.schema';
import { CharacterUncheckedUpdateWithoutCoatInputObjectSchema } from './CharacterUncheckedUpdateWithoutCoatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutCoatInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutCoatInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutCoatInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutCoatInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutCoatInput>;
export const CharacterUpdateWithWhereUniqueWithoutCoatInputObjectZodSchema = makeSchema();
