import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatOrderByWithRelationInputObjectSchema } from './objects/CoatOrderByWithRelationInput.schema';
import { CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatScalarFieldEnumSchema } from './enums/CoatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CoatFindFirstSelectSchema: z.ZodType<Prisma.CoatSelect> = z.object({
    id: z.boolean().optional(),
    color: z.boolean().optional(),
    pattern: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CoatSelect>;

export const CoatFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    color: z.boolean().optional(),
    pattern: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CoatFindFirstSchema: z.ZodType<Prisma.CoatFindFirstArgs> = z.object({ select: CoatFindFirstSelectSchema.optional(), include: z.lazy(() => CoatIncludeObjectSchema.optional()), orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoatScalarFieldEnumSchema, CoatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CoatFindFirstArgs>;

export const CoatFindFirstZodSchema = z.object({ select: CoatFindFirstSelectSchema.optional(), include: z.lazy(() => CoatIncludeObjectSchema.optional()), orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoatScalarFieldEnumSchema, CoatScalarFieldEnumSchema.array()]).optional() }).strict();