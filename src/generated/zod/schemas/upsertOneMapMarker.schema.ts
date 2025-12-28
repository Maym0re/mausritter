import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema as MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';
import { MapMarkerCreateInputObjectSchema as MapMarkerCreateInputObjectSchema } from './objects/MapMarkerCreateInput.schema';
import { MapMarkerUncheckedCreateInputObjectSchema as MapMarkerUncheckedCreateInputObjectSchema } from './objects/MapMarkerUncheckedCreateInput.schema';
import { MapMarkerUpdateInputObjectSchema as MapMarkerUpdateInputObjectSchema } from './objects/MapMarkerUpdateInput.schema';
import { MapMarkerUncheckedUpdateInputObjectSchema as MapMarkerUncheckedUpdateInputObjectSchema } from './objects/MapMarkerUncheckedUpdateInput.schema';

export const MapMarkerUpsertOneSchema: z.ZodType<Prisma.MapMarkerUpsertArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema, create: z.union([ MapMarkerCreateInputObjectSchema, MapMarkerUncheckedCreateInputObjectSchema ]), update: z.union([ MapMarkerUpdateInputObjectSchema, MapMarkerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MapMarkerUpsertArgs>;

export const MapMarkerUpsertOneZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema, create: z.union([ MapMarkerCreateInputObjectSchema, MapMarkerUncheckedCreateInputObjectSchema ]), update: z.union([ MapMarkerUpdateInputObjectSchema, MapMarkerUncheckedUpdateInputObjectSchema ]) }).strict();