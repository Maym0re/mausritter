import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();
export const CampaignPlayerCreateManyInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyInput>;
export const CampaignPlayerCreateManyInputObjectZodSchema = makeSchema();
