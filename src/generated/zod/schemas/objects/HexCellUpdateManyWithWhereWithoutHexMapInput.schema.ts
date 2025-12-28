import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellScalarWhereInputObjectSchema as HexCellScalarWhereInputObjectSchema } from './HexCellScalarWhereInput.schema';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './HexCellUpdateManyMutationInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexMapInputObjectSchema as HexCellUncheckedUpdateManyWithoutHexMapInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateManyMutationInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateManyWithoutHexMapInputObjectSchema)])
}).strict();
export const HexCellUpdateManyWithWhereWithoutHexMapInputObjectSchema: z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateManyWithWhereWithoutHexMapInput>;
export const HexCellUpdateManyWithWhereWithoutHexMapInputObjectZodSchema = makeSchema();
