import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutSettlementInputObjectSchema } from './HexCellUpdateWithoutSettlementInput.schema';
import { HexCellUncheckedUpdateWithoutSettlementInputObjectSchema } from './HexCellUncheckedUpdateWithoutSettlementInput.schema';
import { HexCellCreateWithoutSettlementInputObjectSchema } from './HexCellCreateWithoutSettlementInput.schema';
import { HexCellUncheckedCreateWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => HexCellUpdateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutSettlementInputObjectSchema)]),
  create: z.union([z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema)])
}).strict();
export const HexCellUpsertWithWhereUniqueWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutSettlementInput>;
export const HexCellUpsertWithWhereUniqueWithoutSettlementInputObjectZodSchema = makeSchema();
