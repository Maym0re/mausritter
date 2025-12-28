import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  campaignId: z.string(),
  userId: z.string()
}).strict();
export const CampaignPlayerCampaignIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCampaignIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCampaignIdUserIdCompoundUniqueInput>;
export const CampaignPlayerCampaignIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
