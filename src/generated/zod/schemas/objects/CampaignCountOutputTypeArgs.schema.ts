import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCountOutputTypeSelectObjectSchema as CampaignCountOutputTypeSelectObjectSchema } from './CampaignCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CampaignCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CampaignCountOutputTypeArgsObjectSchema = makeSchema();
export const CampaignCountOutputTypeArgsObjectZodSchema = makeSchema();
