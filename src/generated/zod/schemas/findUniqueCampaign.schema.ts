import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';

export const CampaignFindUniqueSchema: z.ZodType<Prisma.CampaignFindUniqueArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignFindUniqueArgs>;

export const CampaignFindUniqueZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema }).strict();