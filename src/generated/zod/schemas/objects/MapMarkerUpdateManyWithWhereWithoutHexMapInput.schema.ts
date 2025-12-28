import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerScalarWhereInputObjectSchema as MapMarkerScalarWhereInputObjectSchema } from './MapMarkerScalarWhereInput.schema';
import { MapMarkerUpdateManyMutationInputObjectSchema as MapMarkerUpdateManyMutationInputObjectSchema } from './MapMarkerUpdateManyMutationInput.schema';
import { MapMarkerUncheckedUpdateManyWithoutHexMapInputObjectSchema as MapMarkerUncheckedUpdateManyWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedUpdateManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapMarkerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MapMarkerUpdateManyMutationInputObjectSchema), z.lazy(() => MapMarkerUncheckedUpdateManyWithoutHexMapInputObjectSchema)])
}).strict();
export const MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerUpdateManyWithWhereWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUpdateManyWithWhereWithoutHexMapInput>;
export const MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectZodSchema = makeSchema();
