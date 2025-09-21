import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateWithoutLandmarkDetailInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema)])
}).strict();
export const HexCellCreateOrConnectWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellCreateOrConnectWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateOrConnectWithoutLandmarkDetailInput>;
export const HexCellCreateOrConnectWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
