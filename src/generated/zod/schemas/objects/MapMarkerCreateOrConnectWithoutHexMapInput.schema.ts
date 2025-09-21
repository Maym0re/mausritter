import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerWhereUniqueInputObjectSchema } from './MapMarkerWhereUniqueInput.schema';
import { MapMarkerCreateWithoutHexMapInputObjectSchema } from './MapMarkerCreateWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapMarkerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerCreateOrConnectWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCreateOrConnectWithoutHexMapInput>;
export const MapMarkerCreateOrConnectWithoutHexMapInputObjectZodSchema = makeSchema();
