import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateWithoutLandmarkDetailInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkDetailInput.schema';
import { HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateOrConnectWithoutLandmarkDetailInput.schema';
import { HexCellCreateManyLandmarkDetailInputEnvelopeObjectSchema } from './HexCellCreateManyLandmarkDetailInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellCreateWithoutLandmarkDetailInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyLandmarkDetailInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HexCellCreateNestedManyWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellCreateNestedManyWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateNestedManyWithoutLandmarkDetailInput>;
export const HexCellCreateNestedManyWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
