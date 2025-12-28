import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();
export const CampaignPlayerCreateManyUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyUserInput>;
export const CampaignPlayerCreateManyUserInputObjectZodSchema = makeSchema();
