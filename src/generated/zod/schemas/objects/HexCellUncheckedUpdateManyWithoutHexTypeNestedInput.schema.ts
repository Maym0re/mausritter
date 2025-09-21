import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutHexTypeInputObjectSchema } from './HexCellCreateWithoutHexTypeInput.schema';
import { HexCellUncheckedCreateWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateWithoutHexTypeInput.schema';
import { HexCellCreateOrConnectWithoutHexTypeInputObjectSchema } from './HexCellCreateOrConnectWithoutHexTypeInput.schema';
import { HexCellUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema } from './HexCellUpsertWithWhereUniqueWithoutHexTypeInput.schema';
import { HexCellCreateManyHexTypeInputEnvelopeObjectSchema } from './HexCellCreateManyHexTypeInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema } from './HexCellUpdateWithWhereUniqueWithoutHexTypeInput.schema';
import { HexCellUpdateManyWithWhereWithoutHexTypeInputObjectSchema } from './HexCellUpdateManyWithWhereWithoutHexTypeInput.schema';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellCreateWithoutHexTypeInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutHexTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HexCellUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyHexTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => HexCellUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HexCellUpdateManyWithWhereWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUpdateManyWithWhereWithoutHexTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutHexTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutHexTypeNestedInput>;
export const HexCellUncheckedUpdateManyWithoutHexTypeNestedInputObjectZodSchema = makeSchema();
