import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerIncludeObjectSchema as MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerOrderByWithRelationInputObjectSchema as MapMarkerOrderByWithRelationInputObjectSchema } from './objects/MapMarkerOrderByWithRelationInput.schema';
import { MapMarkerWhereInputObjectSchema as MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';
import { MapMarkerScalarFieldEnumSchema } from './enums/MapMarkerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MapMarkerFindFirstSelectSchema: z.ZodType<Prisma.MapMarkerSelect> = z.object({
    id: z.boolean().optional(),
    hexMapId: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    image: z.boolean().optional(),
    x: z.boolean().optional(),
    y: z.boolean().optional(),
    z: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MapMarkerSelect>;

export const MapMarkerFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    hexMapId: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    image: z.boolean().optional(),
    x: z.boolean().optional(),
    y: z.boolean().optional(),
    z: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const MapMarkerFindFirstSchema: z.ZodType<Prisma.MapMarkerFindFirstArgs> = z.object({ select: MapMarkerFindFirstSelectSchema.optional(), include: z.lazy(() => MapMarkerIncludeObjectSchema.optional()), orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapMarkerScalarFieldEnumSchema, MapMarkerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerFindFirstArgs>;

export const MapMarkerFindFirstZodSchema = z.object({ select: MapMarkerFindFirstSelectSchema.optional(), include: z.lazy(() => MapMarkerIncludeObjectSchema.optional()), orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapMarkerScalarFieldEnumSchema, MapMarkerScalarFieldEnumSchema.array()]).optional() }).strict();