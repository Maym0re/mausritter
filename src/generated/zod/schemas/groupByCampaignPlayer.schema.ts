import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';
import { CampaignPlayerOrderByWithAggregationInputObjectSchema } from './objects/CampaignPlayerOrderByWithAggregationInput.schema';
import { CampaignPlayerScalarWhereWithAggregatesInputObjectSchema } from './objects/CampaignPlayerScalarWhereWithAggregatesInput.schema';
import { CampaignPlayerScalarFieldEnumSchema } from './enums/CampaignPlayerScalarFieldEnum.schema';
import { CampaignPlayerCountAggregateInputObjectSchema } from './objects/CampaignPlayerCountAggregateInput.schema';
import { CampaignPlayerMinAggregateInputObjectSchema } from './objects/CampaignPlayerMinAggregateInput.schema';
import { CampaignPlayerMaxAggregateInputObjectSchema } from './objects/CampaignPlayerMaxAggregateInput.schema';

export const CampaignPlayerGroupBySchema: z.ZodType<Prisma.CampaignPlayerGroupByArgs> = z.object({ where: CampaignPlayerWhereInputObjectSchema.optional(), orderBy: z.union([CampaignPlayerOrderByWithAggregationInputObjectSchema, CampaignPlayerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CampaignPlayerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CampaignPlayerScalarFieldEnumSchema), _count: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional(), _min: CampaignPlayerMinAggregateInputObjectSchema.optional(), _max: CampaignPlayerMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerGroupByArgs>;

export const CampaignPlayerGroupByZodSchema = z.object({ where: CampaignPlayerWhereInputObjectSchema.optional(), orderBy: z.union([CampaignPlayerOrderByWithAggregationInputObjectSchema, CampaignPlayerOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CampaignPlayerScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CampaignPlayerScalarFieldEnumSchema), _count: z.union([ z.literal(true), CampaignPlayerCountAggregateInputObjectSchema ]).optional(), _min: CampaignPlayerMinAggregateInputObjectSchema.optional(), _max: CampaignPlayerMaxAggregateInputObjectSchema.optional() }).strict();