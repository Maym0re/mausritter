import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatIncludeObjectSchema as CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatOrderByWithRelationInputObjectSchema as CoatOrderByWithRelationInputObjectSchema } from './objects/CoatOrderByWithRelationInput.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatScalarFieldEnumSchema } from './enums/CoatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CoatFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CoatSelect> = z.object({
    id: z.boolean().optional(),
    color: z.boolean().optional(),
    pattern: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CoatSelect>;

export const CoatFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    color: z.boolean().optional(),
    pattern: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CoatFindFirstOrThrowSchema: z.ZodType<Prisma.CoatFindFirstOrThrowArgs> = z.object({ select: CoatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CoatIncludeObjectSchema.optional()), orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoatScalarFieldEnumSchema, CoatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CoatFindFirstOrThrowArgs>;

export const CoatFindFirstOrThrowZodSchema = z.object({ select: CoatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CoatIncludeObjectSchema.optional()), orderBy: z.union([CoatOrderByWithRelationInputObjectSchema, CoatOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoatWhereInputObjectSchema.optional(), cursor: CoatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoatScalarFieldEnumSchema, CoatScalarFieldEnumSchema.array()]).optional() }).strict();