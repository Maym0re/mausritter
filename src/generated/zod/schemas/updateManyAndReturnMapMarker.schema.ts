import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapMarkerSelectObjectSchema as MapMarkerSelectObjectSchema } from './objects/MapMarkerSelect.schema';
import { MapMarkerUpdateManyMutationInputObjectSchema as MapMarkerUpdateManyMutationInputObjectSchema } from './objects/MapMarkerUpdateManyMutationInput.schema';
import { MapMarkerWhereInputObjectSchema as MapMarkerWhereInputObjectSchema } from './objects/MapMarkerWhereInput.schema';

export const MapMarkerUpdateManyAndReturnSchema: z.ZodType<Prisma.MapMarkerUpdateManyAndReturnArgs> = z.object({ select: MapMarkerSelectObjectSchema.optional(), data: MapMarkerUpdateManyMutationInputObjectSchema, where: MapMarkerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MapMarkerUpdateManyAndReturnArgs>;

export const MapMarkerUpdateManyAndReturnZodSchema = z.object({ select: MapMarkerSelectObjectSchema.optional(), data: MapMarkerUpdateManyMutationInputObjectSchema, where: MapMarkerWhereInputObjectSchema.optional() }).strict();