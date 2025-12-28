import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  some: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  none: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignListRelationFilterObjectSchema: z.ZodType<Prisma.CampaignListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CampaignListRelationFilter>;
export const CampaignListRelationFilterObjectZodSchema = makeSchema();
