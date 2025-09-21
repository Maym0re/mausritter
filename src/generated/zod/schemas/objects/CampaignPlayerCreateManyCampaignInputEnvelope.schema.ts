import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateManyCampaignInputObjectSchema } from './CampaignPlayerCreateManyCampaignInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CampaignPlayerCreateManyCampaignInputObjectSchema), z.lazy(() => CampaignPlayerCreateManyCampaignInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CampaignPlayerCreateManyCampaignInputEnvelopeObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateManyCampaignInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyCampaignInputEnvelope>;
export const CampaignPlayerCreateManyCampaignInputEnvelopeObjectZodSchema = makeSchema();
