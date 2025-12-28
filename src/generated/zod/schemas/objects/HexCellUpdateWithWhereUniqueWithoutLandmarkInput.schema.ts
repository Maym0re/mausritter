import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutLandmarkInputObjectSchema as HexCellUpdateWithoutLandmarkInputObjectSchema } from './HexCellUpdateWithoutLandmarkInput.schema';
import { HexCellUncheckedUpdateWithoutLandmarkInputObjectSchema as HexCellUncheckedUpdateWithoutLandmarkInputObjectSchema } from './HexCellUncheckedUpdateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutLandmarkInputObjectSchema)])
}).strict();
export const HexCellUpdateWithWhereUniqueWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutLandmarkInput>;
export const HexCellUpdateWithWhereUniqueWithoutLandmarkInputObjectZodSchema = makeSchema();
