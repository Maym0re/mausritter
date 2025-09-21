import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerScalarWhereInputObjectSchema } from './MapMarkerScalarWhereInput.schema';
import { MapMarkerUpdateManyMutationInputObjectSchema } from './MapMarkerUpdateManyMutationInput.schema';
import { MapMarkerUncheckedUpdateManyWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedUpdateManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapMarkerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MapMarkerUpdateManyMutationInputObjectSchema), z.lazy(() => MapMarkerUncheckedUpdateManyWithoutHexMapInputObjectSchema)])
}).strict();
export const MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerUpdateManyWithWhereWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUpdateManyWithWhereWithoutHexMapInput>;
export const MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectZodSchema = makeSchema();
