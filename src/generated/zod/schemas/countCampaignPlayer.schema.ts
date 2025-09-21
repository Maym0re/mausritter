import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignPlayerOrderByWithRelationInputObjectSchema } from './objects/CampaignPlayerOrderByWithRelationInput.schema';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCountAggregateInputObjectSchema } from './objects/CampaignPlayerCountAggregateInput.schema';

export const CampaignPlayerCountSchema: z.ZodType<Prisma.CampaignPlayerCountArgs> = z.object({ orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerCountArgs>;

export const CampaignPlayerCountZodSchema = z.object({ orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional() }).strict();