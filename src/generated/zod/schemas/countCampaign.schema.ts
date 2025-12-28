import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignOrderByWithRelationInputObjectSchema as CampaignOrderByWithRelationInputObjectSchema } from './objects/CampaignOrderByWithRelationInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';
import { CampaignCountAggregateInputObjectSchema as CampaignCountAggregateInputObjectSchema } from './objects/CampaignCountAggregateInput.schema';

export const CampaignCountSchema: z.ZodType<Prisma.CampaignCountArgs> = z.object({ orderBy: z.union([CampaignOrderByWithRelationInputObjectSchema, CampaignOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignWhereInputObjectSchema.optional(), cursor: CampaignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CampaignCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CampaignCountArgs>;

export const CampaignCountZodSchema = z.object({ orderBy: z.union([CampaignOrderByWithRelationInputObjectSchema, CampaignOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignWhereInputObjectSchema.optional(), cursor: CampaignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CampaignCountAggregateInputObjectSchema ]).optional() }).strict();