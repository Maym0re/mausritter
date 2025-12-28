import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutConditionsInputObjectSchema as CharacterCreateWithoutConditionsInputObjectSchema } from './CharacterCreateWithoutConditionsInput.schema';
import { CharacterUncheckedCreateWithoutConditionsInputObjectSchema as CharacterUncheckedCreateWithoutConditionsInputObjectSchema } from './CharacterUncheckedCreateWithoutConditionsInput.schema';
import { CharacterCreateOrConnectWithoutConditionsInputObjectSchema as CharacterCreateOrConnectWithoutConditionsInputObjectSchema } from './CharacterCreateOrConnectWithoutConditionsInput.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterCreateWithoutConditionsInputObjectSchema).array(), z.lazy(() => CharacterUncheckedCreateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutConditionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CharacterCreateOrConnectWithoutConditionsInputObjectSchema), z.lazy(() => CharacterCreateOrConnectWithoutConditionsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CharacterWhereUniqueInputObjectSchema), z.lazy(() => CharacterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CharacterUncheckedCreateNestedManyWithoutConditionsInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUncheckedCreateNestedManyWithoutConditionsInput>;
export const CharacterUncheckedCreateNestedManyWithoutConditionsInputObjectZodSchema = makeSchema();
