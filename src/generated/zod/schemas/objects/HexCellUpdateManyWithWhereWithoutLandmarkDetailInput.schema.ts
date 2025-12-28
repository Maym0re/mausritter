import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkDetailInputObjectSchema as HexCellUncheckedUpdateManyWithoutLandmarkDetailInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkDetailInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkDetailInput>;
export const HexCellUpdateManyWithWhereWithoutLandmarkDetailInputObjectZodSchema = makeSchema();
