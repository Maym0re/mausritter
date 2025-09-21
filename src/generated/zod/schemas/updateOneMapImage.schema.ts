import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageUpdateInputObjectSchema } from './objects/MapImageUpdateInput.schema';
import { MapImageUncheckedUpdateInputObjectSchema } from './objects/MapImageUncheckedUpdateInput.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';

export const MapImageUpdateOneSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), data: z.union([MapImageUpdateInputObjectSchema, MapImageUncheckedUpdateInputObjectSchema]), where: MapImageWhereUniqueInputObjectSchema  })