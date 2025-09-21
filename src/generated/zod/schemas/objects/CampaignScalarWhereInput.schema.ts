import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumSeasonNameFilterObjectSchema } from './EnumSeasonNameFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const campaignscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CampaignScalarWhereInputObjectSchema), z.lazy(() => CampaignScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CampaignScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CampaignScalarWhereInputObjectSchema), z.lazy(() => CampaignScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  gmId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameFilterObjectSchema), SeasonNameSchema]).optional(),
  weatherEntryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  todaysEvent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const CampaignScalarWhereInputObjectSchema: z.ZodType<Prisma.CampaignScalarWhereInput> = campaignscalarwhereinputSchema as unknown as z.ZodType<Prisma.CampaignScalarWhereInput>;
export const CampaignScalarWhereInputObjectZodSchema = campaignscalarwhereinputSchema;
