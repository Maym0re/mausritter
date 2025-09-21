import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexMapInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutHexMapInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexMapInput>;
export const HexCellUpdateManyWithWhereWithoutHexMapInputObjectZodSchema = makeSchema();
