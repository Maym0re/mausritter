import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateWithoutConditionsInputObjectSchema } from './CharacterUpdateWithoutConditionsInput.schema';
import { CharacterUncheckedUpdateWithoutConditionsInputObjectSchema } from './CharacterUncheckedUpdateWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateWithoutConditionsInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutConditionsInputObjectSchema)])
}).strict();
export const CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectSchema: z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateWithWhereUniqueWithoutConditionsInput>;
export const CharacterUpdateWithWhereUniqueWithoutConditionsInputObjectZodSchema = makeSchema();
