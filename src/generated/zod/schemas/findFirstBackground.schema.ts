import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundIncludeObjectSchema as BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundOrderByWithRelationInputObjectSchema as BackgroundOrderByWithRelationInputObjectSchema } from './objects/BackgroundOrderByWithRelationInput.schema';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';
import { BackgroundScalarFieldEnumSchema } from './enums/BackgroundScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BackgroundFindFirstSelectSchema: z.ZodType<Prisma.BackgroundSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    itemA: z.boolean().optional(),
    itemB: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BackgroundSelect>;

export const BackgroundFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    itemA: z.boolean().optional(),
    itemB: z.boolean().optional(),
    characters: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BackgroundFindFirstSchema: z.ZodType<Prisma.BackgroundFindFirstArgs> = z.object({ select: BackgroundFindFirstSelectSchema.optional(), include: z.lazy(() => BackgroundIncludeObjectSchema.optional()), orderBy: z.union([BackgroundOrderByWithRelationInputObjectSchema, BackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: BackgroundWhereInputObjectSchema.optional(), cursor: BackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BackgroundScalarFieldEnumSchema, BackgroundScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundFindFirstArgs>;

export const BackgroundFindFirstZodSchema = z.object({ select: BackgroundFindFirstSelectSchema.optional(), include: z.lazy(() => BackgroundIncludeObjectSchema.optional()), orderBy: z.union([BackgroundOrderByWithRelationInputObjectSchema, BackgroundOrderByWithRelationInputObjectSchema.array()]).optional(), where: BackgroundWhereInputObjectSchema.optional(), cursor: BackgroundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BackgroundScalarFieldEnumSchema, BackgroundScalarFieldEnumSchema.array()]).optional() }).strict();