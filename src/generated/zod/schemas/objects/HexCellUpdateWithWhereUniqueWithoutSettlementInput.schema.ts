import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutSettlementInputObjectSchema as HexCellUpdateWithoutSettlementInputObjectSchema } from './HexCellUpdateWithoutSettlementInput.schema';
import { HexCellUncheckedUpdateWithoutSettlementInputObjectSchema as HexCellUncheckedUpdateWithoutSettlementInputObjectSchema } from './HexCellUncheckedUpdateWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutSettlementInputObjectSchema)])
}).strict();
export const HexCellUpdateWithWhereUniqueWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutSettlementInput>;
export const HexCellUpdateWithWhereUniqueWithoutSettlementInputObjectZodSchema = makeSchema();
