import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementOrderByWithRelationInputObjectSchema } from './objects/SettlementOrderByWithRelationInput.schema';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';
import { SettlementScalarFieldEnumSchema } from './enums/SettlementScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettlementFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SettlementSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    size: z.boolean().optional(),
    governance: z.boolean().optional(),
    inhabitants: z.boolean().optional(),
    feature: z.boolean().optional(),
    industry: z.boolean().optional(),
    event: z.boolean().optional(),
    population: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SettlementSelect>;

export const SettlementFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    size: z.boolean().optional(),
    governance: z.boolean().optional(),
    inhabitants: z.boolean().optional(),
    feature: z.boolean().optional(),
    industry: z.boolean().optional(),
    event: z.boolean().optional(),
    population: z.boolean().optional(),
    HexCell: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SettlementFindFirstOrThrowSchema: z.ZodType<Prisma.SettlementFindFirstOrThrowArgs> = z.object({ select: SettlementFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SettlementIncludeObjectSchema.optional()), orderBy: z.union([SettlementOrderByWithRelationInputObjectSchema, SettlementOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettlementWhereInputObjectSchema.optional(), cursor: SettlementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettlementScalarFieldEnumSchema, SettlementScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SettlementFindFirstOrThrowArgs>;

export const SettlementFindFirstOrThrowZodSchema = z.object({ select: SettlementFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SettlementIncludeObjectSchema.optional()), orderBy: z.union([SettlementOrderByWithRelationInputObjectSchema, SettlementOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettlementWhereInputObjectSchema.optional(), cursor: SettlementWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettlementScalarFieldEnumSchema, SettlementScalarFieldEnumSchema.array()]).optional() }).strict();