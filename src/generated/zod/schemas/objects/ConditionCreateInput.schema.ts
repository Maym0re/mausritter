import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCreateeffectsInputObjectSchema as ConditionCreateeffectsInputObjectSchema } from './ConditionCreateeffectsInput.schema';
import { CharacterCreateNestedManyWithoutConditionsInputObjectSchema as CharacterCreateNestedManyWithoutConditionsInputObjectSchema } from './CharacterCreateNestedManyWithoutConditionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  clearRequirement: z.string().optional().nullable(),
  effects: z.union([z.lazy(() => ConditionCreateeffectsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutConditionsInputObjectSchema).optional()
}).strict();
export const ConditionCreateInputObjectSchema: z.ZodType<Prisma.ConditionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCreateInput>;
export const ConditionCreateInputObjectZodSchema = makeSchema();
