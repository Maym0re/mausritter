import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerUpdateManyMutationInputObjectSchema as MapMarkerUpdateManyMutationInputObjectSchema } from './objects/MapMarkerUpdateManyMutationInput.schema';
import { MapMarkerWhereInputObjectSchema as MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';

export const MapMarkerUpdateManySchema: z.ZodType<Prisma.MapMarkerUpdateManyArgs> = z.object({ data: MapMarkerUpdateManyMutationInputObjectSchema, where: MapMarkerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerUpdateManyArgs>;

export const MapMarkerUpdateManyZodSchema = z.object({ data: MapMarkerUpdateManyMutationInputObjectSchema, where: MapMarkerWhereInputObjectSchema.optional() }).strict();