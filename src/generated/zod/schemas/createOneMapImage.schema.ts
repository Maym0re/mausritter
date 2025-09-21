import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageCreateInputObjectSchema } from './objects/MapImageCreateInput.schema';
import { MapImageUncheckedCreateInputObjectSchema } from './objects/MapImageUncheckedCreateInput.schema';

export const MapImageCreateOneSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), data: z.union([MapImageCreateInputObjectSchema, MapImageUncheckedCreateInputObjectSchema])  })