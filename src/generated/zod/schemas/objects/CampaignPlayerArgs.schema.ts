import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerSelectObjectSchema as CampaignPlayerSelectObjectSchema } from './CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema as CampaignPlayerIncludeObjectSchema } from './CampaignPlayerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CampaignPlayerSelectObjectSchema).optional(),
  include: z.lazy(() => CampaignPlayerIncludeObjectSchema).optional()
}).strict();
export const CampaignPlayerArgsObjectSchema = makeSchema();
export const CampaignPlayerArgsObjectZodSchema = makeSchema();
