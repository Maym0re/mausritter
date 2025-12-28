import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexTypeInputObjectSchema as HexCellUncheckedUpdateManyWithoutHexTypeInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutHexTypeInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexTypeInput>;
export const HexCellUpdateManyWithWhereWithoutHexTypeInputObjectZodSchema = makeSchema();
