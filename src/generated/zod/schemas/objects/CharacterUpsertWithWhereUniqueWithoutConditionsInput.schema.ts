import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutConditionsInputObjectSchema } from './CharacterUpdateWithoutConditionsInput.schema';
import { CharacterUncheckedUpdateWithoutConditionsInputObjectSchema } from './CharacterUncheckedUpdateWithoutConditionsInput.schema';
import { CharacterCreateWithoutConditionsInputObjectSchema } from './CharacterCreateWithoutConditionsInput.schema';
import { CharacterUncheckedCreateWithoutConditionsInputObjectSchema } from './CharacterUncheckedCreateWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CharacterUpdateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutConditionsInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacterCreateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutConditionsInputObjectSchema)])
}).strict();
export const CharacterUpsertWithWhereUniqueWithoutConditionsInputObjectSchema: z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpsertWithWhereUniqueWithoutConditionsInput>;
export const CharacterUpsertWithWhereUniqueWithoutConditionsInputObjectZodSchema = makeSchema();
