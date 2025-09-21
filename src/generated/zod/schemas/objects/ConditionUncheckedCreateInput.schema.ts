import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCreateeffectsInputObjectSchema } from './ConditionCreateeffectsInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutConditionsInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  clearRequirement: z.string().optional().nullable(),
  effects: z.union([z.lazy(() => ConditionCreateeffectsInputObjectSchema), z.string().array()]),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutConditionsInputObjectSchema)
}).strict();
export const ConditionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ConditionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUncheckedCreateInput>;
export const ConditionUncheckedCreateInputObjectZodSchema = makeSchema();
