import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerWhereInputObjectSchema as MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';

export const MapMarkerDeleteManySchema: z.ZodType<Prisma.MapMarkerDeleteManyArgs> = z.object({ where: MapMarkerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerDeleteManyArgs>;

export const MapMarkerDeleteManyZodSchema = z.object({ where: MapMarkerWhereInputObjectSchema.optional() }).strict();