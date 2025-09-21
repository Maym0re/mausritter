import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const campaignplayerscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CampaignPlayerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CampaignPlayerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CampaignPlayerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CampaignPlayerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CampaignPlayerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CampaignPlayerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CampaignPlayerScalarWhereWithAggregatesInput> = campaignplayerscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CampaignPlayerScalarWhereWithAggregatesInput>;
export const CampaignPlayerScalarWhereWithAggregatesInputObjectZodSchema = campaignplayerscalarwherewithaggregatesinputSchema;
