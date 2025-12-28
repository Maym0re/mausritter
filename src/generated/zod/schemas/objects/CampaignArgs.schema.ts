import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './CampaignSelect.schema';
import { CampaignIncludeObjectSchema as CampaignIncludeObjectSchema } from './CampaignInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CampaignSelectObjectSchema).optional(),
  include: z.lazy(() => CampaignIncludeObjectSchema).optional()
}).strict();
export const CampaignArgsObjectSchema = makeSchema();
export const CampaignArgsObjectZodSchema = makeSchema();
