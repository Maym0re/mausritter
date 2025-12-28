import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutLandmarkInputObjectSchema as HexCellUpdateWithoutLandmarkInputObjectSchema } from './HexCellUpdateWithoutLandmarkInput.schema';
import { HexCellUncheckedUpdateWithoutLandmarkInputObjectSchema as HexCellUncheckedUpdateWithoutLandmarkInputObjectSchema } from './HexCellUncheckedUpdateWithoutLandmarkInput.schema';
import { HexCellCreateWithoutLandmarkInputObjectSchema as HexCellCreateWithoutLandmarkInputObjectSchema } from './HexCellCreateWithoutLandmarkInput.schema';
import { HexCellUncheckedCreateWithoutLandmarkInputObjectSchema as HexCellUncheckedCreateWithoutLandmarkInputObjectSchema } from './HexCellUncheckedCreateWithoutLandmarkInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => HexCellUpdateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutLandmarkInputObjectSchema)]),
  create: z.union([z.lazy(() => HexCellCreateWithoutLandmarkInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutLandmarkInputObjectSchema)])
}).strict();
export const HexCellUpsertWithWhereUniqueWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutLandmarkInput>;
export const HexCellUpsertWithWhereUniqueWithoutLandmarkInputObjectZodSchema = makeSchema();
