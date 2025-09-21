import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerWhereUniqueInputObjectSchema } from './MapMarkerWhereUniqueInput.schema';
import { MapMarkerUpdateWithoutHexMapInputObjectSchema } from './MapMarkerUpdateWithoutHexMapInput.schema';
import { MapMarkerUncheckedUpdateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedUpdateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapMarkerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MapMarkerUpdateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedUpdateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapMarkerUpdateWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerUpdateWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUpdateWithWhereUniqueWithoutHexMapInput>;
export const MapMarkerUpdateWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
