import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();
export const CampaignPlayerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedCreateInput>;
export const CampaignPlayerUncheckedCreateInputObjectZodSchema = makeSchema();
