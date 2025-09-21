import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageOrderByWithRelationInputObjectSchema } from './objects/MapImageOrderByWithRelationInput.schema';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageScalarFieldEnumSchema } from './enums/MapImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MapImageFindFirstSelectSchema: z.ZodType<Prisma.MapImageSelect> = z.object({
    id: z.boolean().optional(),
    hexMapId: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    data: z.boolean().optional(),
    x: z.boolean().optional(),
    y: z.boolean().optional(),
    width: z.boolean().optional(),
    height: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MapImageSelect>;

export const MapImageFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    hexMapId: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    data: z.boolean().optional(),
    x: z.boolean().optional(),
    y: z.boolean().optional(),
    width: z.boolean().optional(),
    height: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const MapImageFindFirstSchema: z.ZodType<Prisma.MapImageFindFirstArgs> = z.object({ select: MapImageFindFirstSelectSchema.optional(), include: z.lazy(() => MapImageIncludeObjectSchema.optional()), orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapImageScalarFieldEnumSchema, MapImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MapImageFindFirstArgs>;

export const MapImageFindFirstZodSchema = z.object({ select: MapImageFindFirstSelectSchema.optional(), include: z.lazy(() => MapImageIncludeObjectSchema.optional()), orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapImageScalarFieldEnumSchema, MapImageScalarFieldEnumSchema.array()]).optional() }).strict();