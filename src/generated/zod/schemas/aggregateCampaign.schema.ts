import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignOrderByWithRelationInputObjectSchema as CampaignOrderByWithRelationInputObjectSchema } from './objects/CampaignOrderByWithRelationInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';
import { CampaignCountAggregateInputObjectSchema as CampaignCountAggregateInputObjectSchema } from './objects/CampaignCountAggregateInput.schema';
import { CampaignMinAggregateInputObjectSchema as CampaignMinAggregateInputObjectSchema } from './objects/CampaignMinAggregateInput.schema';
import { CampaignMaxAggregateInputObjectSchema as CampaignMaxAggregateInputObjectSchema } from './objects/CampaignMaxAggregateInput.schema';

export const CampaignAggregateSchema: z.ZodType<Prisma.CampaignAggregateArgs> = z.object({ orderBy: z.union([CampaignOrderByWithRelationInputObjectSchema, CampaignOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignWhereInputObjectSchema.optional(), cursor: CampaignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CampaignCountAggregateInputObjectSchema ]).optional(), _min: CampaignMinAggregateInputObjectSchema.optional(), _max: CampaignMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignAggregateArgs>;

export const CampaignAggregateZodSchema = z.object({ orderBy: z.union([CampaignOrderByWithRelationInputObjectSchema, CampaignOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignWhereInputObjectSchema.optional(), cursor: CampaignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CampaignCountAggregateInputObjectSchema ]).optional(), _min: CampaignMinAggregateInputObjectSchema.optional(), _max: CampaignMaxAggregateInputObjectSchema.optional() }).strict();