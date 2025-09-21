import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerCreateWithoutHexMapInputObjectSchema } from './MapMarkerCreateWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateWithoutHexMapInput.schema';
import { MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema } from './MapMarkerCreateOrConnectWithoutHexMapInput.schema';
import { MapMarkerCreateManyHexMapInputEnvelopeObjectSchema } from './MapMarkerCreateManyHexMapInputEnvelope.schema';
import { MapMarkerWhereUniqueInputObjectSchema } from './MapMarkerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MapMarkerCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MapMarkerWhereUniqueInputObjectSchema), z.lazy(() => MapMarkerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MapMarkerCreateNestedManyWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapMarkerCreateNestedManyWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCreateNestedManyWithoutHexMapInput>;
export const MapMarkerCreateNestedManyWithoutHexMapInputObjectZodSchema = makeSchema();
