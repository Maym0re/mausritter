import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  gmId: z.string(),
  season: SeasonNameSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todaysEvent: z.string().optional().nullable()
}).strict();
export const CampaignCreateManyWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignCreateManyWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateManyWeatherEntryInput>;
export const CampaignCreateManyWeatherEntryInputObjectZodSchema = makeSchema();
