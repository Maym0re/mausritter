import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutBackgroundInputObjectSchema as CharacterUpdateWithoutBackgroundInputObjectSchema } from './CharacterUpdateWithoutBackgroundInput.schema';
import { CharacterUncheckedUpdateWithoutBackgroundInputObjectSchema as CharacterUncheckedUpdateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedUpdateWithoutBackgroundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutBackgroundInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutBackgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutBackgroundInput>;
export const CharacterUpdateWithWhereUniqueWithoutBackgroundInputObjectZodSchema = makeSchema();
