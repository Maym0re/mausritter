import { z } from 'zod';
import { MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerIncludeObjectSchema } from './objects/MapMarkerInclude.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './objects/MapMarkerWhereUniqueInput.schema';
import { MapMarkerCreateInputObjectSchema } from './objects/MapMarkerCreateInput.schema';
import { MapMarkerUncheckedCreateInputObjectSchema } from './objects/MapMarkerUncheckedCreateInput.schema';
import { MapMarkerUpdateInputObjectSchema } from './objects/MapMarkerUpdateInput.schema';
import { MapMarkerUncheckedUpdateInputObjectSchema } from './objects/MapMarkerUncheckedUpdateInput.schema';

export const MapMarkerUpsertSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), include: MapMarkerIncludeObjectSchema.optional(), where: MapMarkerWhereUniqueInputObjectSchema, create: z.union([ MapMarkerCreateInputObjectSchema, MapMarkerUncheckedCreateInputObjectSchema ]), update: z.union([ MapMarkerUpdateInputObjectSchema, MapMarkerUncheckedUpdateInputObjectSchema ])  })