import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';

export const MapImageFindUniqueSchema: z.ZodType<Prisma.MapImageFindUniqueArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapImageFindUniqueArgs>;

export const MapImageFindUniqueZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema }).strict();