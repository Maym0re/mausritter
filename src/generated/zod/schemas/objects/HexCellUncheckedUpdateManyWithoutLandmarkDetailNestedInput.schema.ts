import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutLandmarkDetailInputObjectSchema as HexCellCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateWithoutLandmarkDetailInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema as HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkDetailInput.schema';
import { HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema as HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateOrConnectWithoutLandmarkDetailInput.schema';
import { HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInputObjectSchema as HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInputObjectSchema } from './HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInput.schema';
import { HexCellCreateManyLandmarkDetailInputEnvelopeObjectSchema as HexCellCreateManyLandmarkDetailInputEnvelopeObjectSchema } from './HexCellCreateManyLandmarkDetailInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInputObjectSchema as HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInputObjectSchema } from './HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInput.schema';
import { HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectSchema as HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectSchema } from './HexCellUpdateManyWithWhereWithoutLandmarkDetailInput.schema';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellCreateWithoutLandmarkDetailInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyLandmarkDetailInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInput>;
export const HexCellUncheckedUpdateManyWithoutLandmarkDetailNestedInputObjectZodSchema = makeSchema();
