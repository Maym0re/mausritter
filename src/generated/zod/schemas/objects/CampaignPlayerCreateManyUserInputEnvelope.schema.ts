import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateManyUserInputObjectSchema } from './CampaignPlayerCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CampaignPlayerCreateManyUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CampaignPlayerCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyUserInputEnvelope>;
export const CampaignPlayerCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
