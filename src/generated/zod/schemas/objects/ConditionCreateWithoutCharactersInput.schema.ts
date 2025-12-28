import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCreateeffectsInputObjectSchema as ConditionCreateeffectsInputObjectSchema } from './ConditionCreateeffectsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  clearRequirement: z.string().optional().nullable(),
  effects: z.union([z.lazy(() => ConditionCreateeffectsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ConditionCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCreateWithoutCharactersInput>;
export const ConditionCreateWithoutCharactersInputObjectZodSchema = makeSchema();
