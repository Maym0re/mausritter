import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignScalarRelationFilterObjectSchema: z.ZodType<Prisma.CampaignScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CampaignScalarRelationFilter>;
export const CampaignScalarRelationFilterObjectZodSchema = makeSchema();
