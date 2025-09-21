import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutLandmarkInputObjectSchema } from './HexCellCreateWithoutLandmarkInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkInput.schema';
import { HexCellCreateOrConnectWithoutLandmarkInputObjectSchema } from './HexCellCreateOrConnectWithoutLandmarkInput.schema';
import { HexCellCreateManyLandmarkInputEnvelopeObjectSchema } from './HexCellCreateManyLandmarkInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellCreateWithoutLandmarkInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutLandmarkInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyLandmarkInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HexCellCreateNestedManyWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellCreateNestedManyWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateNestedManyWithoutLandmarkInput>;
export const HexCellCreateNestedManyWithoutLandmarkInputObjectZodSchema = makeSchema();
