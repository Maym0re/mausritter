import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerCreateManyInputObjectSchema as MapMarkerCreateManyInputObjectSchema } from './objects/MapMarkerCreateManyInput.schema';

export const MapMarkerCreateManyAndReturnSchema: z.ZodType<Prisma.MapMarkerCreateManyAndReturnArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), data: z.union([ MapMarkerCreateManyInputObjectSchema, z.array(MapMarkerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerCreateManyAndReturnArgs>;

export const MapMarkerCreateManyAndReturnZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), data: z.union([ MapMarkerCreateManyInputObjectSchema, z.array(MapMarkerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();