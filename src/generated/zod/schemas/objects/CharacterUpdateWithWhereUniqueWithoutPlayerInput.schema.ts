import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutPlayerInputObjectSchema as CharacterUpdateWithoutPlayerInputObjectSchema } from './CharacterUpdateWithoutPlayerInput.schema';
import { CharacterUncheckedUpdateWithoutPlayerInputObjectSchema as CharacterUncheckedUpdateWithoutPlayerInputObjectSchema } from './CharacterUncheckedUpdateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutPlayerInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutPlayerInput>;
export const CharacterUpdateWithWhereUniqueWithoutPlayerInputObjectZodSchema = makeSchema();
