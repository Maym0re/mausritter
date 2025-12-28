import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateManyWeatherEntryInputObjectSchema as CampaignCreateManyWeatherEntryInputObjectSchema } from './CampaignCreateManyWeatherEntryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CampaignCreateManyWeatherEntryInputObjectSchema), z.lazy(() => CampaignCreateManyWeatherEntryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CampaignCreateManyWeatherEntryInputEnvelopeObjectSchema: z.ZodType<Prisma.CampaignCreateManyWeatherEntryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateManyWeatherEntryInputEnvelope>;
export const CampaignCreateManyWeatherEntryInputEnvelopeObjectZodSchema = makeSchema();
