import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogIncludeObjectSchema as DiceRollLogIncludeObjectSchema } from './objects/DiceRollLogInclude.schema';
import { DiceRollLogOrderByWithRelationInputObjectSchema as DiceRollLogOrderByWithRelationInputObjectSchema } from './objects/DiceRollLogOrderByWithRelationInput.schema';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './objects/DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogScalarFieldEnumSchema } from './enums/DiceRollLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiceRollLogFindManySelectSchema: z.ZodType<Prisma.DiceRollLogSelect> = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    notation: z.boolean().optional(),
    total: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    entries: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DiceRollLogSelect>;

export const DiceRollLogFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    notation: z.boolean().optional(),
    total: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    entries: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DiceRollLogFindManySchema: z.ZodType<Prisma.DiceRollLogFindManyArgs> = z.object({ select: DiceRollLogFindManySelectSchema.optional(), include: z.lazy(() => DiceRollLogIncludeObjectSchema.optional()), orderBy: z.union([DiceRollLogOrderByWithRelationInputObjectSchema, DiceRollLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollLogWhereInputObjectSchema.optional(), cursor: DiceRollLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiceRollLogScalarFieldEnumSchema, DiceRollLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogFindManyArgs>;

export const DiceRollLogFindManyZodSchema = z.object({ select: DiceRollLogFindManySelectSchema.optional(), include: z.lazy(() => DiceRollLogIncludeObjectSchema.optional()), orderBy: z.union([DiceRollLogOrderByWithRelationInputObjectSchema, DiceRollLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollLogWhereInputObjectSchema.optional(), cursor: DiceRollLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiceRollLogScalarFieldEnumSchema, DiceRollLogScalarFieldEnumSchema.array()]).optional() }).strict();