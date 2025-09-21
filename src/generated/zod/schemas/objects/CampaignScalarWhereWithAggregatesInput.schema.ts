import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumSeasonNameWithAggregatesFilterObjectSchema } from './EnumSeasonNameWithAggregatesFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const campaignscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CampaignScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CampaignScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CampaignScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CampaignScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CampaignScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  gmId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameWithAggregatesFilterObjectSchema), SeasonNameSchema]).optional(),
  weatherEntryId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  todaysEvent: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const CampaignScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CampaignScalarWhereWithAggregatesInput> = campaignscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CampaignScalarWhereWithAggregatesInput>;
export const CampaignScalarWhereWithAggregatesInputObjectZodSchema = campaignscalarwherewithaggregatesinputSchema;
