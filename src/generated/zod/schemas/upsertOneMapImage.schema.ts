import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageCreateInputObjectSchema } from './objects/MapImageCreateInput.schema';
import { MapImageUncheckedCreateInputObjectSchema } from './objects/MapImageUncheckedCreateInput.schema';
import { MapImageUpdateInputObjectSchema } from './objects/MapImageUpdateInput.schema';
import { MapImageUncheckedUpdateInputObjectSchema } from './objects/MapImageUncheckedUpdateInput.schema';

export const MapImageUpsertSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema, create: z.union([ MapImageCreateInputObjectSchema, MapImageUncheckedCreateInputObjectSchema ]), update: z.union([ MapImageUpdateInputObjectSchema, MapImageUncheckedUpdateInputObjectSchema ])  })