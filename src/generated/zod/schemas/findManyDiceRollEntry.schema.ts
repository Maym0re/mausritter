import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntryIncludeObjectSchema as DiceRollEntryIncludeObjectSchema } from './objects/DiceRollEntryInclude.schema';
import { DiceRollEntryOrderByWithRelationInputObjectSchema as DiceRollEntryOrderByWithRelationInputObjectSchema } from './objects/DiceRollEntryOrderByWithRelationInput.schema';
import { DiceRollEntryWhereInputObjectSchema as DiceRollEntryWhereInputObjectSchema } from './objects/DiceRollEntryWhereInput.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './objects/DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryScalarFieldEnumSchema } from './enums/DiceRollEntryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiceRollEntryFindManySelectSchema: z.ZodType<Prisma.DiceRollEntrySelect> = z.object({
    id: z.boolean().optional(),
    logId: z.boolean().optional(),
    log: z.boolean().optional(),
    order: z.boolean().optional(),
    type: z.boolean().optional(),
    value: z.boolean().optional(),
    sides: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DiceRollEntrySelect>;

export const DiceRollEntryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    logId: z.boolean().optional(),
    log: z.boolean().optional(),
    order: z.boolean().optional(),
    type: z.boolean().optional(),
    value: z.boolean().optional(),
    sides: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const DiceRollEntryFindManySchema: z.ZodType<Prisma.DiceRollEntryFindManyArgs> = z.object({ select: DiceRollEntryFindManySelectSchema.optional(), include: z.lazy(() => DiceRollEntryIncludeObjectSchema.optional()), orderBy: z.union([DiceRollEntryOrderByWithRelationInputObjectSchema, DiceRollEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollEntryWhereInputObjectSchema.optional(), cursor: DiceRollEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiceRollEntryScalarFieldEnumSchema, DiceRollEntryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryFindManyArgs>;

export const DiceRollEntryFindManyZodSchema = z.object({ select: DiceRollEntryFindManySelectSchema.optional(), include: z.lazy(() => DiceRollEntryIncludeObjectSchema.optional()), orderBy: z.union([DiceRollEntryOrderByWithRelationInputObjectSchema, DiceRollEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiceRollEntryWhereInputObjectSchema.optional(), cursor: DiceRollEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiceRollEntryScalarFieldEnumSchema, DiceRollEntryScalarFieldEnumSchema.array()]).optional() }).strict();