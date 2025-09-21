import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';

export const MapMarkerFindUniqueSchema: z.ZodType<Prisma.MapMarkerFindUniqueArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapMarkerFindUniqueArgs>;

export const MapMarkerFindUniqueZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema }).strict();