import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SettlementOrderByWithRelationInputObjectSchema } from './objects/SettlementOrderByWithRelationInput.schema';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';
import { SettlementCountAggregateInputObjectSchema } from './objects/SettlementCountAggregateInput.schema';
import { SettlementMinAggregateInputObjectSchema } from './objects/SettlementMinAggregateInput.schema';
import { SettlementMaxAggregateInputObjectSchema } from './objects/SettlementMaxAggregateInput.schema';
import { SettlementAvgAggregateInputObjectSchema } from './objects/SettlementAvgAggregateInput.schema';
import { SettlementSumAggregateInputObjectSchema } from './objects/SettlementSumAggregateInput.schema';

export const SettlementAggregateSchema: z.ZodType<Prisma.SettlementAggregateArgs> = z.object({ orderBy: z.union([SettlementOrderByWithRelationInputObjectSchema, SettlementOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettlementWhereInputObjectSchema.optional(), cursor: SettlementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SettlementCountAggregateInputObjectSchema ]).optional(), _min: SettlementMinAggregateInputObjectSchema.optional(), _max: SettlementMaxAggregateInputObjectSchema.optional(), _avg: SettlementAvgAggregateInputObjectSchema.optional(), _sum: SettlementSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettlementAggregateArgs>;

export const SettlementAggregateZodSchema = z.object({ orderBy: z.union([SettlementOrderByWithRelationInputObjectSchema, SettlementOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettlementWhereInputObjectSchema.optional(), cursor: SettlementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SettlementCountAggregateInputObjectSchema ]).optional(), _min: SettlementMinAggregateInputObjectSchema.optional(), _max: SettlementMaxAggregateInputObjectSchema.optional(), _avg: SettlementAvgAggregateInputObjectSchema.optional(), _sum: SettlementSumAggregateInputObjectSchema.optional() }).strict();