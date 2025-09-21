import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';

export const MapImageDeleteOneSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema  })