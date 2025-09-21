import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema';
import { MapImageCreateOrConnectWithoutHexMapInputObjectSchema } from './MapImageCreateOrConnectWithoutHexMapInput.schema';
import { MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema } from './MapImageUpsertWithWhereUniqueWithoutHexMapInput.schema';
import { MapImageCreateManyHexMapInputEnvelopeObjectSchema } from './MapImageCreateManyHexMapInputEnvelope.schema';
import { MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectSchema } from './MapImageUpdateWithWhereUniqueWithoutHexMapInput.schema';
import { MapImageUpdateManyWithWhereWithoutHexMapInputObjectSchema } from './MapImageUpdateManyWithWhereWithoutHexMapInput.schema';
import { MapImageScalarWhereInputObjectSchema } from './MapImageScalarWhereInput.schema'

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
export const MapImageUpdateManyWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.MapImageUpdateManyWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUpdateManyWithoutHexMapNestedInput>;
export const MapImageUpdateManyWithoutHexMapNestedInputObjectZodSchema = makeSchema();
