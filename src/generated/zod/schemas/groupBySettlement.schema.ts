import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';
import { SettlementOrderByWithAggregationInputObjectSchema } from './objects/SettlementOrderByWithAggregationInput.schema';
import { SettlementScalarWhereWithAggregatesInputObjectSchema } from './objects/SettlementScalarWhereWithAggregatesInput.schema';
import { SettlementScalarFieldEnumSchema } from './enums/SettlementScalarFieldEnum.schema';
import { SettlementCountAggregateInputObjectSchema } from './objects/SettlementCountAggregateInput.schema';
import { SettlementMinAggregateInputObjectSchema } from './objects/SettlementMinAggregateInput.schema';
import { SettlementMaxAggregateInputObjectSchema } from './objects/SettlementMaxAggregateInput.schema';
import { SettlementAvgAggregateInputObjectSchema } from './objects/SettlementAvgAggregateInput.schema';
import { SettlementSumAggregateInputObjectSchema } from './objects/SettlementSumAggregateInput.schema';

export const SettlementGroupBySchema: z.ZodType<Prisma.SettlementGroupByArgs> = z.object({ where: SettlementWhereInputObjectSchema.optional(), orderBy: z.union([SettlementOrderByWithAggregationInputObjectSchema, SettlementOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SettlementScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SettlementScalarFieldEnumSchema), _count: z.union([ z.literal(true), SettlementCountAggregateInputObjectSchema ]).optional(), _min: SettlementMinAggregateInputObjectSchema.optional(), _max: SettlementMaxAggregateInputObjectSchema.optional(), _avg: SettlementAvgAggregateInputObjectSchema.optional(), _sum: SettlementSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettlementGroupByArgs>;

export const SettlementGroupByZodSchema = z.object({ where: SettlementWhereInputObjectSchema.optional(), orderBy: z.union([SettlementOrderByWithAggregationInputObjectSchema, SettlementOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SettlementScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SettlementScalarFieldEnumSchema), _count: z.union([ z.literal(true), SettlementCountAggregateInputObjectSchema ]).optional(), _min: SettlementMinAggregateInputObjectSchema.optional(), _max: SettlementMaxAggregateInputObjectSchema.optional(), _avg: SettlementAvgAggregateInputObjectSchema.optional(), _sum: SettlementSumAggregateInputObjectSchema.optional() }).strict();