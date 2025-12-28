import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageCreateWithoutHexMapInputObjectSchema as MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema as MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema';
import { MapImageCreateOrConnectWithoutHexMapInputObjectSchema as MapImageCreateOrConnectWithoutHexMapInputObjectSchema } from './MapImageCreateOrConnectWithoutHexMapInput.schema';
import { MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema as MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema } from './MapImageUpsertWithWhereUniqueWithoutHexMapInput.schema';
import { MapImageCreateManyHexMapInputEnvelopeObjectSchema as MapImageCreateManyHexMapInputEnvelopeObjectSchema } from './MapImageCreateManyHexMapInputEnvelope.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectSchema as MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectSchema } from './MapImageUpdateWithWhereUniqueWithoutHexMapInput.schema';
import { MapImageUpdateManyWithWhereWithoutHexMapInputObjectSchema as MapImageUpdateManyWithWhereWithoutHexMapInputObjectSchema } from './MapImageUpdateManyWithWhereWithoutHexMapInput.schema';
import { MapImageScalarWhereInputObjectSchema as MapImageScalarWhereInputObjectSchema } from './MapImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MapImageCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => MapImageCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MapImageCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MapImageWhereUniqueInputObjectSchema), z.lazy(() => MapImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MapImageWhereUniqueInputObjectSchema), z.lazy(() => MapImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MapImageWhereUniqueInputObjectSchema), z.lazy(() => MapImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MapImageWhereUniqueInputObjectSchema), z.lazy(() => MapImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MapImageUpdateManyWithWhereWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUpdateManyWithWhereWithoutHexMapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MapImageScalarWhereInputObjectSchema), z.lazy(() => MapImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.MapImageUncheckedUpdateManyWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUncheckedUpdateManyWithoutHexMapNestedInput>;
export const MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectZodSchema = makeSchema();
