import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkInput>;
export const HexCellUpdateManyWithWhereWithoutLandmarkInputObjectZodSchema = makeSchema();
