import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutHexMapInputObjectSchema as HexCellCreateWithoutHexMapInputObjectSchema } from './HexCellCreateWithoutHexMapInput.schema';
import { HexCellUncheckedCreateWithoutHexMapInputObjectSchema as HexCellUncheckedCreateWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateWithoutHexMapInput.schema';
import { HexCellCreateOrConnectWithoutHexMapInputObjectSchema as HexCellCreateOrConnectWithoutHexMapInputObjectSchema } from './HexCellCreateOrConnectWithoutHexMapInput.schema';
import { HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectSchema as HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectSchema } from './HexCellUpsertWithWhereUniqueWithoutHexMapInput.schema';
import { HexCellCreateManyHexMapInputEnvelopeObjectSchema as HexCellCreateManyHexMapInputEnvelopeObjectSchema } from './HexCellCreateManyHexMapInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectSchema as HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectSchema } from './HexCellUpdateWithWhereUniqueWithoutHexMapInput.schema';
import { HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema as HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema } from './HexCellUpdateManyWithWhereWithoutHexMapInput.schema';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema'

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
export const HexCellUpdateManyWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithoutHexMapNestedInput>;
export const HexCellUpdateManyWithoutHexMapNestedInputObjectZodSchema = makeSchema();
