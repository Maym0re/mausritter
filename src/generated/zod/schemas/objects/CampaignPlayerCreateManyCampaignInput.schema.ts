import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();
export const CampaignPlayerCreateManyCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateManyCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyCampaignInput>;
export const CampaignPlayerCreateManyCampaignInputObjectZodSchema = makeSchema();
