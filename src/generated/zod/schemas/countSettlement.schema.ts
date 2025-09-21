import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SettlementOrderByWithRelationInputObjectSchema } from './objects/SettlementOrderByWithRelationInput.schema';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';
import { SettlementCountAggregateInputObjectSchema } from './objects/SettlementCountAggregateInput.schema';

export const SettlementCountSchema: z.ZodType<Prisma.SettlementCountArgs> = z.object({ orderBy: z.union([SettlementOrderByWithRelationInputObjectSchema, SettlementOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettlementWhereInputObjectSchema.optional(), cursor: SettlementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SettlementCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SettlementCountArgs>;

export const SettlementCountZodSchema = z.object({ orderBy: z.union([SettlementOrderByWithRelationInputObjectSchema, SettlementOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettlementWhereInputObjectSchema.optional(), cursor: SettlementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SettlementCountAggregateInputObjectSchema ]).optional() }).strict();