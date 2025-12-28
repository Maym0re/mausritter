import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatIncludeObjectSchema as CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatOrderByWithRelationInputObjectSchema as CoatOrderByWithRelationInputObjectSchema } from './objects/CoatOrderByWithRelationInput.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatScalarFieldEnumSchema } from './enums/CoatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CoatFindManySelectSchema: z.ZodType<Prisma.CoatSelect> = z.object({
    id: z.boolean().optional(),
    color: z.boolean().optional(),
    pattern: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CoatSelect>;

export const CoatFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    color: z.boolean().optional(),
    pattern: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CoatFindManySchema: z.ZodType<Prisma.CoatFindManyArgs> = z.object({ select: CoatFindManySelectSchema.optional(), include: z.lazy(() => CoatIncludeObjectSchema.optional()), orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoatScalarFieldEnumSchema, CoatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CoatFindManyArgs>;

export const CoatFindManyZodSchema = z.object({ select: CoatFindManySelectSchema.optional(), include: z.lazy(() => CoatIncludeObjectSchema.optional()), orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoatScalarFieldEnumSchema, CoatScalarFieldEnumSchema.array()]).optional() }).strict();