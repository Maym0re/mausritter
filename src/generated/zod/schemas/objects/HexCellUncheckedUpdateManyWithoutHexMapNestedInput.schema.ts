import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutHexMapInputObjectSchema } from './HexCellCreateWithoutHexMapInput.schema';
import { HexCellUncheckedCreateWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateWithoutHexMapInput.schema';
import { HexCellCreateOrConnectWithoutHexMapInputObjectSchema } from './HexCellCreateOrConnectWithoutHexMapInput.schema';
import { HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectSchema } from './HexCellUpsertWithWhereUniqueWithoutHexMapInput.schema';
import { HexCellCreateManyHexMapInputEnvelopeObjectSchema } from './HexCellCreateManyHexMapInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectSchema } from './HexCellUpdateWithWhereUniqueWithoutHexMapInput.schema';
import { HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema } from './HexCellUpdateManyWithWhereWithoutHexMapInput.schema';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HexCellScalarWhereInputObjectSchema), z.lazy(() => HexCellScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedUpdateManyWithoutHexMapNestedInput>;
export const HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectZodSchema = makeSchema();
