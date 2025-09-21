import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutPlayerInputObjectSchema } from './CharacterCreateWithoutPlayerInput.schema';
import { CharacterUncheckedCreateWithoutPlayerInputObjectSchema } from './CharacterUncheckedCreateWithoutPlayerInput.schema';
import { CharacterCreateOrConnectWithoutPlayerInputObjectSchema } from './CharacterCreateOrConnectWithoutPlayerInput.schema';
import { CharacterCreateManyPlayerInputEnvelopeObjectSchema } from './CharacterCreateManyPlayerInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterCreateWithoutPlayerInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutPlayerInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutPlayerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutPlayerInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutPlayerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyPlayerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterCreateNestedManyWithoutPlayerInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedManyWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateNestedManyWithoutPlayerInput>;
export const CharacterCreateNestedManyWithoutPlayerInputObjectZodSchema = makeSchema();
