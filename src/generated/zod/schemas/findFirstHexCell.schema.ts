import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellOrderByWithRelationInputObjectSchema } from './objects/HexCellOrderByWithRelationInput.schema';
import { HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';
import { HexCellScalarFieldEnumSchema } from './enums/HexCellScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HexCellFindFirstSelectSchema: z.ZodType<Prisma.HexCellSelect> = z.object({
    id: z.boolean().optional(),
    hexMapId: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    q: z.boolean().optional(),
    r: z.boolean().optional(),
    s: z.boolean().optional(),
    hexTypeId: z.boolean().optional(),
    hexType: z.boolean().optional(),
    landmarkId: z.boolean().optional(),
    landmark: z.boolean().optional(),
    landmarkDetailId: z.boolean().optional(),
    landmarkDetail: z.boolean().optional(),
    settlementId: z.boolean().optional(),
    settlement: z.boolean().optional(),
    isRevealed: z.boolean().optional(),
    notes: z.boolean().optional(),
    customName: z.boolean().optional(),
    masterNotes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.HexCellSelect>;

export const HexCellFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    hexMapId: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    q: z.boolean().optional(),
    r: z.boolean().optional(),
    s: z.boolean().optional(),
    hexTypeId: z.boolean().optional(),
    hexType: z.boolean().optional(),
    landmarkId: z.boolean().optional(),
    landmark: z.boolean().optional(),
    landmarkDetailId: z.boolean().optional(),
    landmarkDetail: z.boolean().optional(),
    settlementId: z.boolean().optional(),
    settlement: z.boolean().optional(),
    isRevealed: z.boolean().optional(),
    notes: z.boolean().optional(),
    customName: z.boolean().optional(),
    masterNotes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const HexCellFindFirstSchema: z.ZodType<Prisma.HexCellFindFirstArgs> = z.object({ select: HexCellFindFirstSelectSchema.optional(), include: z.lazy(() => HexCellIncludeObjectSchema.optional()), orderBy: z.union([HexCellOrderByWithRelationInputObjectSchema, HexCellOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexCellWhereInputObjectSchema.optional(), cursor: HexCellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HexCellScalarFieldEnumSchema, HexCellScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.HexCellFindFirstArgs>;

export const HexCellFindFirstZodSchema = z.object({ select: HexCellFindFirstSelectSchema.optional(), include: z.lazy(() => HexCellIncludeObjectSchema.optional()), orderBy: z.union([HexCellOrderByWithRelationInputObjectSchema, HexCellOrderByWithRelationInputObjectSchema.array()]).optional(), where: HexCellWhereInputObjectSchema.optional(), cursor: HexCellWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([HexCellScalarFieldEnumSchema, HexCellScalarFieldEnumSchema.array()]).optional() }).strict();