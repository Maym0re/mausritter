import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkDetailInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkDetailInput>;
export const HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
