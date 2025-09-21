import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexTypeInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutHexTypeInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexTypeInput>;
export const HexCellUpdateManyWithWhereWithoutHexTypeInputObjectZodSchema = makeSchema();
