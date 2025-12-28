import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutLandmarkInputObjectSchema as HexCellUncheckedUpdateManyWithoutLandmarkInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutLandmarkInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutLandmarkInput>;
export const HexCellUpdateManyWithWhereWithoutLandmarkInputObjectZodSchema = makeSchema();
