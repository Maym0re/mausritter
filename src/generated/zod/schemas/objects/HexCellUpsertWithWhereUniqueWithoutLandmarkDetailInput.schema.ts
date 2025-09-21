import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutLandmarkDetailInputObjectSchema } from './HexCellUpdateWithoutLandmarkDetailInput.schema';
import { HexCellUncheckedUpdateWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedUpdateWithoutLandmarkDetailInput.schema';
import { HexCellCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellCreateWithoutLandmarkDetailInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => HexCellUpdateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutLandmarkDetailInputObjectSchema)]),
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkDetailInputObjectSchema)])
}).strict();
export const HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInput>;
export const HexCellUpsertWithWhereUniqueWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
