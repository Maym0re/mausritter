import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionIncludeObjectSchema as ConditionIncludeObjectSchema } from './objects/ConditionInclude.schema';
import { ConditionOrderByWithRelationInputObjectSchema as ConditionOrderByWithRelationInputObjectSchema } from './objects/ConditionOrderByWithRelationInput.schema';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './objects/ConditionWhereUniqueInput.schema';
import { ConditionScalarFieldEnumSchema } from './enums/ConditionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConditionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ConditionSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    clearRequirement: z.boolean().optional(),
    effects: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ConditionSelect>;

export const ConditionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    clearRequirement: z.boolean().optional(),
    effects: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ConditionFindFirstOrThrowSchema: z.ZodType<Prisma.ConditionFindFirstOrThrowArgs> = z.object({ select: ConditionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ConditionIncludeObjectSchema.optional()), orderBy: z.union([ConditionOrderByWithRelationInputObjectSchema, ConditionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConditionWhereInputObjectSchema.optional(), cursor: ConditionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConditionScalarFieldEnumSchema, ConditionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConditionFindFirstOrThrowArgs>;

export const ConditionFindFirstOrThrowZodSchema = z.object({ select: ConditionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ConditionIncludeObjectSchema.optional()), orderBy: z.union([ConditionOrderByWithRelationInputObjectSchema, ConditionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConditionWhereInputObjectSchema.optional(), cursor: ConditionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConditionScalarFieldEnumSchema, ConditionScalarFieldEnumSchema.array()]).optional() }).strict();