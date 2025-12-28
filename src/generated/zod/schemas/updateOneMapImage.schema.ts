import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema as MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageUpdateInputObjectSchema as MapImageUpdateInputObjectSchema } from './objects/MapImageUpdateInput.schema';
import { MapImageUncheckedUpdateInputObjectSchema as MapImageUncheckedUpdateInputObjectSchema } from './objects/MapImageUncheckedUpdateInput.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';

export const MapImageUpdateOneSchema: z.ZodType<Prisma.MapImageUpdateArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), data: z.union([MapImageUpdateInputObjectSchema, MapImageUncheckedUpdateInputObjectSchema]), where: MapImageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MapImageUpdateArgs>;

export const MapImageUpdateOneZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), data: z.union([MapImageUpdateInputObjectSchema, MapImageUncheckedUpdateInputObjectSchema]), where: MapImageWhereUniqueInputObjectSchema }).strict();