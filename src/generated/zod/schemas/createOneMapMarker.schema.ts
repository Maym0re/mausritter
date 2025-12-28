import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema as MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerCreateInputObjectSchema as MapMarkerCreateInputObjectSchema } from './objects/MapMarkerCreateInput.schema';
import { MapMarkerUncheckedCreateInputObjectSchema as MapMarkerUncheckedCreateInputObjectSchema } from './objects/MapMarkerUncheckedCreateInput.schema';

export const MapMarkerCreateOneSchema: z.ZodType<Prisma.MapMarkerCreateArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), data: z.union([MapMarkerCreateInputObjectSchema, MapMarkerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MapMarkerCreateArgs>;

export const MapMarkerCreateOneZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), data: z.union([MapMarkerCreateInputObjectSchema, MapMarkerUncheckedCreateInputObjectSchema]) }).strict();