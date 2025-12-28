import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexMapUpdateWithoutCellsInputObjectSchema as HexMapUpdateWithoutCellsInputObjectSchema } from './HexMapUpdateWithoutCellsInput.schema';
import { HexMapUncheckedUpdateWithoutCellsInputObjectSchema as HexMapUncheckedUpdateWithoutCellsInputObjectSchema } from './HexMapUncheckedUpdateWithoutCellsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexMapUpdateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutCellsInputObjectSchema)])
}).strict();
export const HexMapUpdateToOneWithWhereWithoutCellsInputObjectSchema: z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutCellsInput>;
export const HexMapUpdateToOneWithWhereWithoutCellsInputObjectZodSchema = makeSchema();
