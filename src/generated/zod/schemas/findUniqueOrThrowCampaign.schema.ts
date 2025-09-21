import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';

export const CampaignFindUniqueOrThrowSchema: z.ZodType<Prisma.CampaignFindUniqueOrThrowArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CampaignFindUniqueOrThrowArgs>;

export const CampaignFindUniqueOrThrowZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), include: CampaignIncludeObjectSchema.optional(), where: CampaignWhereUniqueInputObjectSchema }).strict();