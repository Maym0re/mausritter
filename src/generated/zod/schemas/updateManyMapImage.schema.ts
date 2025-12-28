import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageUpdateManyMutationInputObjectSchema as MapImageUpdateManyMutationInputObjectSchema } from './objects/MapImageUpdateManyMutationInput.schema';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';

export const MapImageUpdateManySchema: z.ZodType<Prisma.MapImageUpdateManyArgs> = z.object({ data: MapImageUpdateManyMutationInputObjectSchema, where: MapImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapImageUpdateManyArgs>;

export const MapImageUpdateManyZodSchema = z.object({ data: MapImageUpdateManyMutationInputObjectSchema, where: MapImageWhereInputObjectSchema.optional() }).strict();