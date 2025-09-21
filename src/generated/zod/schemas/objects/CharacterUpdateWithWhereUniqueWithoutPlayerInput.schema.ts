import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutPlayerInputObjectSchema } from './CharacterUpdateWithoutPlayerInput.schema';
import { CharacterUncheckedUpdateWithoutPlayerInputObjectSchema } from './CharacterUncheckedUpdateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutPlayerInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutPlayerInput>;
export const CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectZodSchema = makeSchema();
