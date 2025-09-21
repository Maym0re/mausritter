import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateManyUserInputObjectSchema } from './DiceRollLogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DiceRollLogCreateManyUserInputObjectSchema), z.lazy(() => DiceRollLogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DiceRollLogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.DiceRollLogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyUserInputEnvelope>;
export const DiceRollLogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
