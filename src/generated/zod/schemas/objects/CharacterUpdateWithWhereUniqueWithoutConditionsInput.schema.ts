import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutConditionsInputObjectSchema as CharacterUpdateWithoutConditionsInputObjectSchema } from './CharacterUpdateWithoutConditionsInput.schema';
import { CharacterUncheckedUpdateWithoutConditionsInputObjectSchema as CharacterUncheckedUpdateWithoutConditionsInputObjectSchema } from './CharacterUncheckedUpdateWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutConditionsInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutConditionsInput>;
export const CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectZodSchema = makeSchema();
