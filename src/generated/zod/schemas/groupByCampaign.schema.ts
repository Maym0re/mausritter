import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';
import { CampaignOrderByWithAggregationInputObjectSchema as CampaignOrderByWithAggregationInputObjectSchema } from './objects/CampaignOrderByWithAggregationInput.schema';
import { CampaignScalarWhereWithAggregatesInputObjectSchema as CampaignScalarWhereWithAggregatesInputObjectSchema } from './objects/CampaignScalarWhereWithAggregatesInput.schema';
import { CampaignScalarFieldEnumSchema } from './enums/CampaignScalarFieldEnum.schema';
import { CampaignCountAggregateInputObjectSchema as CampaignCountAggregateInputObjectSchema } from './objects/CampaignCountAggregateInput.schema';
import { CampaignMinAggregateInputObjectSchema as CampaignMinAggregateInputObjectSchema } from './objects/CampaignMinAggregateInput.schema';
import { CampaignMaxAggregateInputObjectSchema as CampaignMaxAggregateInputObjectSchema } from './objects/CampaignMaxAggregateInput.schema';

export const CampaignGroupBySchema: z.ZodType<Prisma.CampaignGroupByArgs> = z.object({ where: CampaignWhereInputObjectSchema.optional(), orderBy: z.union([CampaignOrderByWithAggregationInputObjectSchema, CampaignOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CampaignScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CampaignScalarFieldEnumSchema), _count: z.union([ z.literal(true), CampaignCountAggregateInputObjectSchema ]).optional(), _min: CampaignMinAggregateInputObjectSchema.optional(), _max: CampaignMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignGroupByArgs>;

export const CampaignGroupByZodSchema = z.object({ where: CampaignWhereInputObjectSchema.optional(), orderBy: z.union([CampaignOrderByWithAggregationInputObjectSchema, CampaignOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CampaignScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CampaignScalarFieldEnumSchema), _count: z.union([ z.literal(true), CampaignCountAggregateInputObjectSchema ]).optional(), _min: CampaignMinAggregateInputObjectSchema.optional(), _max: CampaignMaxAggregateInputObjectSchema.optional() }).strict();