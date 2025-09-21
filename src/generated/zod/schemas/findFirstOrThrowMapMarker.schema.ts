import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerOrderByWithRelationInputObjectSchema } from './objects/MapMarkerOrderByWithRelationInput.schema';
import { MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';
import { MapMarkerScalarFieldEnumSchema } from './enums/MapMarkerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MapMarkerFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MapMarkerSelect> = z.object({
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

export const MapMarkerFindFirstOrThrowSelectZodSchema = z.object({
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

export const MapMarkerFindFirstOrThrowSchema: z.ZodType<Prisma.MapMarkerFindFirstOrThrowArgs> = z.object({ select: MapMarkerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MapMarkerIncludeObjectSchema.optional()), orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapMarkerScalarFieldEnumSchema, MapMarkerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerFindFirstOrThrowArgs>;

export const MapMarkerFindFirstOrThrowZodSchema = z.object({ select: MapMarkerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MapMarkerIncludeObjectSchema.optional()), orderBy: z.union([MapMarkerOrderByWithRelationInputObjectSchema, MapMarkerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapMarkerWhereInputObjectSchema.optional(), cursor: MapMarkerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapMarkerScalarFieldEnumSchema, MapMarkerScalarFieldEnumSchema.array()]).optional() }).strict();