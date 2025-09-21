import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateManyCampaignInputObjectSchema } from './DiceRollLogCreateManyCampaignInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DiceRollLogCreateManyCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateManyCampaignInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema: z.ZodType<Prisma.DiceRollLogCreateManyCampaignInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyCampaignInputEnvelope>;
export const DiceRollLogCreateManyCampaignInputEnvelopeObjectZodSchema = makeSchema();
