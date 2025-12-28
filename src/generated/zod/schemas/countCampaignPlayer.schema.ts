import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerOrderByWithRelationInputObjectSchema as CampaignPlayerOrderByWithRelationInputObjectSchema } from './objects/CampaignPlayerOrderByWithRelationInput.schema';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerCountAggregateInputObjectSchema as CampaignPlayerCountAggregateInputObjectSchema } from './objects/CampaignPlayerCountAggregateInput.schema';

export const CampaignPlayerCountSchema: z.ZodType<Prisma.CampaignPlayerCountArgs> = z.object({ orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerCountArgs>;

export const CampaignPlayerCountZodSchema = z.object({ orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional() }).strict();