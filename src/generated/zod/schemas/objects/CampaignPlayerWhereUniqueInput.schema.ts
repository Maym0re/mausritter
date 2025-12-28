import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCampaignIdUserIdCompoundUniqueInputObjectSchema as CampaignPlayerCampaignIdUserIdCompoundUniqueInputObjectSchema } from './CampaignPlayerCampaignIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId_userId: z.lazy(() => CampaignPlayerCampaignIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CampaignPlayerWhereUniqueInputObjectSchema: z.ZodType<Prisma.CampaignPlayerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerWhereUniqueInput>;
export const CampaignPlayerWhereUniqueInputObjectZodSchema = makeSchema();
