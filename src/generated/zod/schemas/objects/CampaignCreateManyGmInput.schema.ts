import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  season: SeasonNameSchema.optional(),
  weatherEntryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todaysEvent: z.string().optional().nullable()
}).strict();
export const CampaignCreateManyGmInputObjectSchema: z.ZodType<Prisma.CampaignCreateManyGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateManyGmInput>;
export const CampaignCreateManyGmInputObjectZodSchema = makeSchema();
