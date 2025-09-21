import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';

export const CampaignPlayerFindUniqueSchema: z.ZodType<Prisma.CampaignPlayerFindUniqueArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerFindUniqueArgs>;

export const CampaignPlayerFindUniqueZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema }).strict();