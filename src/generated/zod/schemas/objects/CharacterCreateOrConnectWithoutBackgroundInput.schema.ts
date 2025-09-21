import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutBackgroundInputObjectSchema } from './CharacterCreateWithoutBackgroundInput.schema';
import { CharacterUncheckedCreateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedCreateWithoutBackgroundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBackgroundInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutBackgroundInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutBackgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutBackgroundInput>;
export const CharacterCreateOrConnectWithoutBackgroundInputObjectZodSchema = makeSchema();
