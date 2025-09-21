import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapOrderByWithRelationInputObjectSchema } from './objects/HexMapOrderByWithRelationInput.schema';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapScalarFieldEnumSchema } from './enums/HexMapScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HexMapFindFirstOrThrowSelectSchema: z.ZodType<Prisma.HexMapSelect> = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    size: z.boolean().optional(),
    centerX: z.boolean().optional(),
    centerY: z.boolean().optional(),
    cells: z.boolean().optional(),
    images: z.boolean().optional(),
    markers: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HexMapSelect>;

export const HexMapFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    size: z.boolean().optional(),
    centerX: z.boolean().optional(),
    centerY: z.boolean().optional(),
    cells: z.boolean().optional(),
    images: z.boolean().optional(),
    markers: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const HexMapFindFirstOrThrowSchema: z.ZodType<Prisma.HexMapFindFirstOrThrowArgs> = z.object({ select: HexMapFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => HexMapIncludeObjectSchema.optional()), orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HexMapScalarFieldEnumSchema, HexMapScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HexMapFindFirstOrThrowArgs>;

export const HexMapFindFirstOrThrowZodSchema = z.object({ select: HexMapFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => HexMapIncludeObjectSchema.optional()), orderBy: z.union([HexMapOrderByWithRelationInputObjectSchema, HexMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexMapWhereInputObjectSchema.optional(), cursor: HexMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HexMapScalarFieldEnumSchema, HexMapScalarFieldEnumSchema.array()]).optional() }).strict();