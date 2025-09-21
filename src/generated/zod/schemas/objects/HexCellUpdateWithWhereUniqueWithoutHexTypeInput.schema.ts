import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutHexTypeInputObjectSchema } from './HexCellUpdateWithoutHexTypeInput.schema';
import { HexCellUncheckedUpdateWithoutHexTypeInputObjectSchema } from './HexCellUncheckedUpdateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => HexCellUpdateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutHexTypeInputObjectSchema)])
}).strict();
export const HexCellUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithWhereUniqueWithoutHexTypeInput>;
export const HexCellUpdateWithWhereUniqueWithoutHexTypeInputObjectZodSchema = makeSchema();
