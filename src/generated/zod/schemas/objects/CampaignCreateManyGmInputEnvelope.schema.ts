import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateManyGmInputObjectSchema as CampaignCreateManyGmInputObjectSchema } from './CampaignCreateManyGmInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CampaignCreateManyGmInputObjectSchema), z.lazy(() => CampaignCreateManyGmInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CampaignCreateManyGmInputEnvelopeObjectSchema: z.ZodType<Prisma.CampaignCreateManyGmInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateManyGmInputEnvelope>;
export const CampaignCreateManyGmInputEnvelopeObjectZodSchema = makeSchema();
