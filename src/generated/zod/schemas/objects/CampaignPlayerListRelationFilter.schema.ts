import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './CampaignPlayerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CampaignPlayerWhereInputObjectSchema).optional(),
  some: z.lazy(() => CampaignPlayerWhereInputObjectSchema).optional(),
  none: z.lazy(() => CampaignPlayerWhereInputObjectSchema).optional()
}).strict();
export const CampaignPlayerListRelationFilterObjectSchema: z.ZodType<Prisma.CampaignPlayerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerListRelationFilter>;
export const CampaignPlayerListRelationFilterObjectZodSchema = makeSchema();
