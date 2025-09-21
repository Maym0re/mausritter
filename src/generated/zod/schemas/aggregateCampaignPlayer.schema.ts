import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignPlayerOrderByWithRelationInputObjectSchema } from './objects/CampaignPlayerOrderByWithRelationInput.schema';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCountAggregateInputObjectSchema } from './objects/CampaignPlayerCountAggregateInput.schema';
import { CampaignPlayerMinAggregateInputObjectSchema } from './objects/CampaignPlayerMinAggregateInput.schema';
import { CampaignPlayerMaxAggregateInputObjectSchema } from './objects/CampaignPlayerMaxAggregateInput.schema';

export const CampaignPlayerAggregateSchema: z.ZodType<Prisma.CampaignPlayerAggregateArgs> = z.object({ orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional(), _min: CampaignPlayerMinAggregateInputObjectSchema.optional(), _max: CampaignPlayerMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerAggregateArgs>;

export const CampaignPlayerAggregateZodSchema = z.object({ orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional(), _min: CampaignPlayerMinAggregateInputObjectSchema.optional(), _max: CampaignPlayerMaxAggregateInputObjectSchema.optional() }).strict();