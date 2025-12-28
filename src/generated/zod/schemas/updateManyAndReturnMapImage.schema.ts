import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageUpdateManyMutationInputObjectSchema as MapImageUpdateManyMutationInputObjectSchema } from './objects/MapImageUpdateManyMutationInput.schema';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';

export const MapImageUpdateManyAndReturnSchema: z.ZodType<Prisma.MapImageUpdateManyAndReturnArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), data: MapImageUpdateManyMutationInputObjectSchema, where: MapImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapImageUpdateManyAndReturnArgs>;

export const MapImageUpdateManyAndReturnZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), data: MapImageUpdateManyMutationInputObjectSchema, where: MapImageWhereInputObjectSchema.optional() }).strict();