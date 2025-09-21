import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutHexMapInputObjectSchema } from './HexCellUpdateWithoutHexMapInput.schema';
import { HexCellUncheckedUpdateWithoutHexMapInputObjectSchema } from './HexCellUncheckedUpdateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutHexMapInputObjectSchema)])
}).strict();
export const HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutHexMapInput>;
export const HexCellUpdateWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
