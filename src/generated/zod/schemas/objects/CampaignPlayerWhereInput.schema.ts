import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CampaignScalarRelationFilterObjectSchema } from './CampaignScalarRelationFilter.schema';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const campaignplayerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CampaignPlayerWhereInputObjectSchema), z.lazy(() => CampaignPlayerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CampaignPlayerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CampaignPlayerWhereInputObjectSchema), z.lazy(() => CampaignPlayerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  campaign: z.union([z.lazy(() => CampaignScalarRelationFilterObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const CampaignPlayerWhereInputObjectSchema: z.ZodType<Prisma.CampaignPlayerWhereInput> = campaignplayerwhereinputSchema as unknown as z.ZodType<Prisma.CampaignPlayerWhereInput>;
export const CampaignPlayerWhereInputObjectZodSchema = campaignplayerwhereinputSchema;
