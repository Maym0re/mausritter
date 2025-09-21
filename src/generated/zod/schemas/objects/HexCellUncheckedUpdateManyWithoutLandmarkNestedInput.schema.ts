import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutLandmarkInputObjectSchema } from './HexCellCreateWithoutLandmarkInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkInput.schema';
import { HexCellCreateOrConnectWithoutLandmarkInputObjectSchema } from './HexCellCreateOrConnectWithoutLandmarkInput.schema';
import { HexCellUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema } from './HexCellUpsertWithWhereUniqueWithoutLandmarkInput.schema';
import { HexCellCreateManyLandmarkInputEnvelopeObjectSchema } from './HexCellCreateManyLandmarkInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema } from './HexCellUpdateWithWhereUniqueWithoutLandmarkInput.schema';
import { HexCellUpdateManyWithWhereWithoutLandmarkInputObjectSchema } from './HexCellUpdateManyWithWhereWithoutLandmarkInput.schema';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellCreateWithoutLandmarkInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutLandmarkInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HexCellUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyLandmarkInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => HexCellUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HexCellUpdateManyWithWhereWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUpdateManyWithWhereWithoutLandmarkInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutLandmarkNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutLandmarkNestedInput>;
export const HexCellUncheckedUpdateManyWithoutLandmarkNestedInputObjectZodSchema = makeSchema();
