import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutLandmarkDetailInputObjectSchema } from './HexCellUpdateWithoutLandmarkDetailInput.schema';
import { HexCellUncheckedUpdateWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedUpdateWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateWithoutLandmarkDetailInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutLandmarkDetailInputObjectSchema)])
}).strict();
export const HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInput>;
export const HexCellUpdateWithWhereUniqueWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
