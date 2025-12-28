import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema as MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';

export const MapMarkerDeleteOneSchema: z.ZodType<Prisma.MapMarkerDeleteArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapMarkerDeleteArgs>;

export const MapMarkerDeleteOneZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema }).strict();