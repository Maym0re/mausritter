import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  joinedAt: z.coerce.date().optional()
}).strict();
export const CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedCreateWithoutUserInput>;
export const CampaignPlayerUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
