import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutLandmarkInput.schema';
import { LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateOrConnectWithoutLandmarkInput.schema';
import { LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema } from './LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInput.schema';
import { LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema } from './LandmarkDetailCreateManyLandmarkInputEnvelope.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema } from './LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInput.schema';
import { LandmarkDetailUpdateManyWithWhereWithoutLandmarkInputObjectSchema } from './LandmarkDetailUpdateManyWithWhereWithoutLandmarkInput.schema';
import { LandmarkDetailScalarWhereInputObjectSchema } from './LandmarkDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema).array(), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema), z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema), z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema), z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema), z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LandmarkDetailUpdateManyWithWhereWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUpdateManyWithWhereWithoutLandmarkInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema), z.lazy(() => LandmarkDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInput>;
export const LandmarkDetailUncheckedUpdateManyWithoutLandmarkNestedInputObjectZodSchema = makeSchema();
