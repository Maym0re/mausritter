import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './MapMarkerWhereUniqueInput.schema';
import { MapMarkerUpdateWithoutHexMapInputObjectSchema as MapMarkerUpdateWithoutHexMapInputObjectSchema } from './MapMarkerUpdateWithoutHexMapInput.schema';
import { MapMarkerUncheckedUpdateWithoutHexMapInputObjectSchema as MapMarkerUncheckedUpdateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedUpdateWithoutHexMapInput.schema';
import { MapMarkerCreateWithoutHexMapInputObjectSchema as MapMarkerCreateWithoutHexMapInputObjectSchema } from './MapMarkerCreateWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema as MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapMarkerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MapMarkerUpdateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedUpdateWithoutHexMapInputObjectSchema)]),
  create: z.union([z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapMarkerUpsertWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerUpsertWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUpsertWithWhereUniqueWithoutHexMapInput>;
export const MapMarkerUpsertWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
