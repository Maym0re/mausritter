import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutSettlementInputObjectSchema } from './HexCellCreateWithoutSettlementInput.schema';
import { HexCellUncheckedCreateWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateWithoutSettlementInput.schema';
import { HexCellCreateOrConnectWithoutSettlementInputObjectSchema } from './HexCellCreateOrConnectWithoutSettlementInput.schema';
import { HexCellUpsertWithWhereUniqueWithoutSettlementInputObjectSchema } from './HexCellUpsertWithWhereUniqueWithoutSettlementInput.schema';
import { HexCellCreateManySettlementInputEnvelopeObjectSchema } from './HexCellCreateManySettlementInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithWhereUniqueWithoutSettlementInputObjectSchema } from './HexCellUpdateWithWhereUniqueWithoutSettlementInput.schema';
import { HexCellUpdateManyWithWhereWithoutSettlementInputObjectSchema } from './HexCellUpdateManyWithWhereWithoutSettlementInput.schema';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutSettlementInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutSettlementInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HexCellUpsertWithWhereUniqueWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUpsertWithWhereUniqueWithoutSettlementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManySettlementInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => HexCellUpdateWithWhereUniqueWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUpdateWithWhereUniqueWithoutSettlementInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HexCellUpdateManyWithWhereWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUpdateManyWithWhereWithoutSettlementInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedUpdateManyWithoutSettlementNestedInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutSettlementNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutSettlementNestedInput>;
export const HexCellUncheckedUpdateManyWithoutSettlementNestedInputObjectZodSchema = makeSchema();
