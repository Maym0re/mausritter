import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutPlayerInputObjectSchema as CharacterCreateWithoutPlayerInputObjectSchema } from './CharacterCreateWithoutPlayerInput.schema';
import { CharacterUncheckedCreateWithoutPlayerInputObjectSchema as CharacterUncheckedCreateWithoutPlayerInputObjectSchema } from './CharacterUncheckedCreateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutPlayerInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutPlayerInput>;
export const CharacterCreateOrConnectWithoutPlayerInputObjectZodSchema = makeSchema();
