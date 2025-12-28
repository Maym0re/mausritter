import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './objects/MapImageWhereInput.schema';

export const MapImageDeleteManySchema: z.ZodType<Prisma.MapImageDeleteManyArgs> = z.object({ where: MapImageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapImageDeleteManyArgs>;

export const MapImageDeleteManyZodSchema = z.object({ where: MapImageWhereInputObjectSchema.optional() }).strict();