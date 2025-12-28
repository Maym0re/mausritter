import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerCreateWithoutHexMapInputObjectSchema as MapMarkerCreateWithoutHexMapInputObjectSchema } from './MapMarkerCreateWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema as MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateWithoutHexMapInput.schema';
import { MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema as MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema } from './MapMarkerCreateOrConnectWithoutHexMapInput.schema';
import { MapMarkerCreateManyHexMapInputEnvelopeObjectSchema as MapMarkerCreateManyHexMapInputEnvelopeObjectSchema } from './MapMarkerCreateManyHexMapInputEnvelope.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './MapMarkerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MapMarkerCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MapMarkerWhereUniqueInputObjectSchema), z.lazy(() => MapMarkerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerUncheckedCreateNestedManyWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUncheckedCreateNestedManyWithoutHexMapInput>;
export const MapMarkerUncheckedCreateNestedManyWithoutHexMapInputObjectZodSchema = makeSchema();
