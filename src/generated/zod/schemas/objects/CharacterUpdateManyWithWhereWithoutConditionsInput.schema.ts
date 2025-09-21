import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterScalarWhereInputObjectSchema } from './CharacterScalarWhereInput.schema';
import { CharacterUpdateManyMutationInputObjectSchema } from './CharacterUpdateManyMutationInput.schema';
import { CharacterUncheckedUpdateManyWithoutConditionsInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateManyWithoutConditionsInputObjectSchema)])
}).strict();
export const CharacterUpdateManyWithWhereWithoutConditionsInputObjectSchema: z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutConditionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterUpdateManyWithWhereWithoutConditionsInput>;
export const CharacterUpdateManyWithWhereWithoutConditionsInputObjectZodSchema = makeSchema();
