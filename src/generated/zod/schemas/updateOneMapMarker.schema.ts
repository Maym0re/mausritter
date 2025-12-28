import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema as MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerUpdateInputObjectSchema as MapMarkerUpdateInputObjectSchema } from './objects/MapMarkerUpdateInput.schema';
import { MapMarkerUncheckedUpdateInputObjectSchema as MapMarkerUncheckedUpdateInputObjectSchema } from './objects/MapMarkerUncheckedUpdateInput.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';

export const MapMarkerUpdateOneSchema: z.ZodType<Prisma.MapMarkerUpdateArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), data: z.union([MapMarkerUpdateInputObjectSchema, MapMarkerUncheckedUpdateInputObjectSchema]), where: MapMarkerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapMarkerUpdateArgs>;

export const MapMarkerUpdateOneZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), data: z.union([MapMarkerUpdateInputObjectSchema, MapMarkerUncheckedUpdateInputObjectSchema]), where: MapMarkerWhereUniqueInputObjectSchema }).strict();