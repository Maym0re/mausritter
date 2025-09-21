import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CampaignOrderByRelationAggregateInputObjectSchema } from './CampaignOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  roll: SortOrderSchema.optional(),
  weather: SortOrderSchema.optional(),
  isPoorCondition: SortOrderSchema.optional(),
  Campaign: z.lazy(() => CampaignOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WeatherEntryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WeatherEntryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryOrderByWithRelationInput>;
export const WeatherEntryOrderByWithRelationInputObjectZodSchema = makeSchema();
