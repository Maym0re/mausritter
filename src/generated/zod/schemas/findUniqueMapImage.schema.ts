import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema as MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';

export const MapImageFindUniqueSchema: z.ZodType<Prisma.MapImageFindUniqueArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapImageFindUniqueArgs>;

export const MapImageFindUniqueZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema }).strict();