import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageOrderByWithRelationInputObjectSchema } from './objects/MapImageOrderByWithRelationInput.schema';
import { MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageScalarFieldEnumSchema } from './enums/MapImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MapImageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MapImageSelect> = z.object({
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

export const MapImageFindFirstOrThrowSelectZodSchema = z.object({
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

export const MapImageFindFirstOrThrowSchema: z.ZodType<Prisma.MapImageFindFirstOrThrowArgs> = z.object({ select: MapImageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MapImageIncludeObjectSchema.optional()), orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapImageScalarFieldEnumSchema, MapImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MapImageFindFirstOrThrowArgs>;

export const MapImageFindFirstOrThrowZodSchema = z.object({ select: MapImageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MapImageIncludeObjectSchema.optional()), orderBy: z.union([MapImageOrderByWithRelationInputObjectSchema, MapImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: MapImageWhereInputObjectSchema.optional(), cursor: MapImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MapImageScalarFieldEnumSchema, MapImageScalarFieldEnumSchema.array()]).optional() }).strict();