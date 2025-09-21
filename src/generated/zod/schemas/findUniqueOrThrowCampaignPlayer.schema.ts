import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';

export const CampaignPlayerFindUniqueOrThrowSchema: z.ZodType<Prisma.CampaignPlayerFindUniqueOrThrowArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerFindUniqueOrThrowArgs>;

export const CampaignPlayerFindUniqueOrThrowZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), include: CampaignPlayerIncludeObjectSchema.optional(), where: CampaignPlayerWhereUniqueInputObjectSchema }).strict();