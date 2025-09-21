import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutCoatInputObjectSchema } from './CharacterCreateWithoutCoatInput.schema';
import { CharacterUncheckedCreateWithoutCoatInputObjectSchema } from './CharacterUncheckedCreateWithoutCoatInput.schema';
import { CharacterCreateOrConnectWithoutCoatInputObjectSchema } from './CharacterCreateOrConnectWithoutCoatInput.schema';
import { CharacterCreateManyCoatInputEnvelopeObjectSchema } from './CharacterCreateManyCoatInputEnvelope.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutCoatInputObjectSchema), z.lazy(() => CharacterCreateWithoutCoatInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutCoatInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutCoatInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutCoatInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutCoatInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CharacterCreateManyCoatInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterCreateNestedManyWithoutCoatInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedManyWithoutCoatInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateNestedManyWithoutCoatInput>;
export const CharacterCreateNestedManyWithoutCoatInputObjectZodSchema = makeSchema();
