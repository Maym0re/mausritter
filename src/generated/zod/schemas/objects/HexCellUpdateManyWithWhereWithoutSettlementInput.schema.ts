import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutSettlementInputObjectSchema as HexCellUncheckedUpdateManyWithoutSettlementInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutSettlementInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutSettlementInput>;
export const HexCellUpdateManyWithWhereWithoutSettlementInputObjectZodSchema = makeSchema();
