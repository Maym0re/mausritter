import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CampaignScalarRelationFilterObjectSchema } from './CampaignScalarRelationFilter.schema';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DiceRollEntryListRelationFilterObjectSchema } from './DiceRollEntryListRelationFilter.schema'

const dicerolllogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DiceRollLogWhereInputObjectSchema), z.lazy(() => DiceRollLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DiceRollLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DiceRollLogWhereInputObjectSchema), z.lazy(() => DiceRollLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  total: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  campaign: z.union([z.lazy(() => CampaignScalarRelationFilterObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  entries: z.lazy(() => DiceRollEntryListRelationFilterObjectSchema).optional()
}).strict();
export const DiceRollLogWhereInputObjectSchema: z.ZodType<Prisma.DiceRollLogWhereInput> = dicerolllogwhereinputSchema as unknown as z.ZodType<Prisma.DiceRollLogWhereInput>;
export const DiceRollLogWhereInputObjectZodSchema = dicerolllogwhereinputSchema;
