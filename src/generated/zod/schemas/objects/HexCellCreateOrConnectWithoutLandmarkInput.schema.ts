import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellCreateWithoutLandmarkInputObjectSchema } from './HexCellCreateWithoutLandmarkInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkInputObjectSchema)])
}).strict();
export const HexCellCreateOrConnectWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellCreateOrConnectWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateOrConnectWithoutLandmarkInput>;
export const HexCellCreateOrConnectWithoutLandmarkInputObjectZodSchema = makeSchema();
