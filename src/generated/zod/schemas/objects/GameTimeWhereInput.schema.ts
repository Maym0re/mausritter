import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CampaignScalarRelationFilterObjectSchema as CampaignScalarRelationFilterObjectSchema } from './CampaignScalarRelationFilter.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const gametimewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GameTimeWhereInputObjectSchema), z.lazy(() => GameTimeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GameTimeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GameTimeWhereInputObjectSchema), z.lazy(() => GameTimeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rounds: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  turns: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  watches: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  days: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  campaign: z.union([z.lazy(() => CampaignScalarRelationFilterObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema)]).optional()
}).strict();
export const GameTimeWhereInputObjectSchema: z.ZodType<Prisma.GameTimeWhereInput> = gametimewhereinputSchema as unknown as z.ZodType<Prisma.GameTimeWhereInput>;
export const GameTimeWhereInputObjectZodSchema = gametimewhereinputSchema;
