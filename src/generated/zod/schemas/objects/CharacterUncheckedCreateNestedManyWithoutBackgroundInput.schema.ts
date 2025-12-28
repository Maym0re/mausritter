import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutBackgroundInputObjectSchema as CharacterCreateWithoutBackgroundInputObjectSchema } from './CharacterCreateWithoutBackgroundInput.schema';
import { CharacterUncheckedCreateWithoutBackgroundInputObjectSchema as CharacterUncheckedCreateWithoutBackgroundInputObjectSchema } from './CharacterUncheckedCreateWithoutBackgroundInput.schema';
import { CharacterCreateOrConnectWithoutBackgroundInputObjectSchema as CharacterCreateOrConnectWithoutBackgroundInputObjectSchema } from './CharacterCreateOrConnectWithoutBackgroundInput.schema';
import { CharacterCreateManyBackgroundInputEnvelopeObjectSchema as CharacterCreateManyBackgroundInputEnvelopeObjectSchema } from './CharacterCreateManyBackgroundInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterCreateWithoutBackgroundInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutBackgroundInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutBackgroundInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutBackgroundInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyBackgroundInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedCreateNestedManyWithoutBackgroundInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutBackgroundInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutBackgroundInput>;
export const CharacterUncheckedCreateNestedManyWithoutBackgroundInputObjectZodSchema = makeSchema();
