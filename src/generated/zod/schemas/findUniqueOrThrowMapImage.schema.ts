import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';

export const MapImageFindUniqueOrThrowSchema: z.ZodType<Prisma.MapImageFindUniqueOrThrowArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapImageFindUniqueOrThrowArgs>;

export const MapImageFindUniqueOrThrowZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema }).strict();