import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterCreateWithoutConditionsInputObjectSchema as CharacterCreateWithoutConditionsInputObjectSchema } from './CharacterCreateWithoutConditionsInput.schema';
import { CharacterUncheckedCreateWithoutConditionsInputObjectSchema as CharacterUncheckedCreateWithoutConditionsInputObjectSchema } from './CharacterUncheckedCreateWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacterCreateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutConditionsInputObjectSchema)])
}).strict();
export const CharacterCreateOrConnectWithoutConditionsInputObjectSchema: z.ZodType<Prisma.CharacterCreateOrConnectWithoutConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateOrConnectWithoutConditionsInput>;
export const CharacterCreateOrConnectWithoutConditionsInputObjectZodSchema = makeSchema();
