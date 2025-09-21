import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryCreateManyLogInputObjectSchema } from './DiceRollEntryCreateManyLogInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DiceRollEntryCreateManyLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateManyLogInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DiceRollEntryCreateManyLogInputEnvelopeObjectSchema: z.ZodType<Prisma.DiceRollEntryCreateManyLogInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCreateManyLogInputEnvelope>;
export const DiceRollEntryCreateManyLogInputEnvelopeObjectZodSchema = makeSchema();
