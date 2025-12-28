import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageIncludeObjectSchema as MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageOrderByWithRelationInputObjectSchema as MapImageOrderByWithRelationInputObjectSchema } from './objects/MapImageOrderByWithRelationInput.schema';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageScalarFieldEnumSchema } from './enums/MapImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MapImageFindManySelectSchema: z.ZodType<Prisma.MapImageSelect> = z.object({
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

export const MapImageFindManySelectZodSchema = z.object({
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

export const MapImageFindManySchema: z.ZodType<Prisma.MapImageFindManyArgs> = z.object({ select: MapImageFindManySelectSchema.optional(), include: z.lazy(() => MapImageIncludeObjectSchema.optional()), orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapImageScalarFieldEnumSchema, MapImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MapImageFindManyArgs>;

export const MapImageFindManyZodSchema = z.object({ select: MapImageFindManySelectSchema.optional(), include: z.lazy(() => MapImageIncludeObjectSchema.optional()), orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapImageScalarFieldEnumSchema, MapImageScalarFieldEnumSchema.array()]).optional() }).strict();