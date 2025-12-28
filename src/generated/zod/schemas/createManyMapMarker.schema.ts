import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerCreateManyInputObjectSchema as MapMarkerCreateManyInputObjectSchema } from './objects/MapMarkerCreateManyInput.schema';

export const MapMarkerCreateManySchema: z.ZodType<Prisma.MapMarkerCreateManyArgs> = z.object({ data: z.union([ MapMarkerCreateManyInputObjectSchema, z.array(MapMarkerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerCreateManyArgs>;

export const MapMarkerCreateManyZodSchema = z.object({ data: z.union([ MapMarkerCreateManyInputObjectSchema, z.array(MapMarkerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();