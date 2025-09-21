import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const campaignplayerscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema), z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema), z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CampaignPlayerScalarWhereInputObjectSchema: z.ZodType<Prisma.CampaignPlayerScalarWhereInput> = campaignplayerscalarwhereinputSchema as unknown as z.ZodType<Prisma.CampaignPlayerScalarWhereInput>;
export const CampaignPlayerScalarWhereInputObjectZodSchema = campaignplayerscalarwhereinputSchema;
