import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerCreateWithoutHexMapInputObjectSchema as MapMarkerCreateWithoutHexMapInputObjectSchema } from './MapMarkerCreateWithoutHexMapInput.schema';
import { MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema as MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema } from './MapMarkerUncheckedCreateWithoutHexMapInput.schema';
import { MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema as MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema } from './MapMarkerCreateOrConnectWithoutHexMapInput.schema';
import { MapMarkerUpsertWithWhereUniqueWithoutHexMapInputObjectSchema as MapMarkerUpsertWithWhereUniqueWithoutHexMapInputObjectSchema } from './MapMarkerUpsertWithWhereUniqueWithoutHexMapInput.schema';
import { MapMarkerCreateManyHexMapInputEnvelopeObjectSchema as MapMarkerCreateManyHexMapInputEnvelopeObjectSchema } from './MapMarkerCreateManyHexMapInputEnvelope.schema';
import { MapMarkerWhereUniqueInputObjectSchema as MapMarkerWhereUniqueInputObjectSchema } from './MapMarkerWhereUniqueInput.schema';
import { MapMarkerUpdateWithWhereUniqueWithoutHexMapInputObjectSchema as MapMarkerUpdateWithWhereUniqueWithoutHexMapInputObjectSchema } from './MapMarkerUpdateWithWhereUniqueWithoutHexMapInput.schema';
import { MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectSchema as MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectSchema } from './MapMarkerUpdateManyWithWhereWithoutHexMapInput.schema';
import { MapMarkerScalarWhereInputObjectSchema as MapMarkerScalarWhereInputObjectSchema } from './MapMarkerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MapMarkerUpsertWithWhereUniqueWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUpsertWithWhereUniqueWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MapMarkerCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MapMarkerWhereUniqueInputObjectSchema), z.lazy(() => MapMarkerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MapMarkerWhereUniqueInputObjectSchema), z.lazy(() => MapMarkerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MapMarkerWhereUniqueInputObjectSchema), z.lazy(() => MapMarkerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MapMarkerWhereUniqueInputObjectSchema), z.lazy(() => MapMarkerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MapMarkerUpdateWithWhereUniqueWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUpdateWithWhereUniqueWithoutHexMapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectSchema), z.lazy(() => MapMarkerUpdateManyWithWhereWithoutHexMapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MapMarkerScalarWhereInputObjectSchema), z.lazy(() => MapMarkerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MapMarkerUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.MapMarkerUncheckedUpdateManyWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerUncheckedUpdateManyWithoutHexMapNestedInput>;
export const MapMarkerUncheckedUpdateManyWithoutHexMapNestedInputObjectZodSchema = makeSchema();
