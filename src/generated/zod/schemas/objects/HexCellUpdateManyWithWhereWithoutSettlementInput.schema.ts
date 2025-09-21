import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutSettlementInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutSettlementInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutSettlementInput>;
export const HexCellUpdateManyWithWhereWithoutSettlementInputObjectZodSchema = makeSchema();
