import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutHexTypeInputObjectSchema as HexCellUpdateWithoutHexTypeInputObjectSchema } from './HexCellUpdateWithoutHexTypeInput.schema';
import { HexCellUncheckedUpdateWithoutHexTypeInputObjectSchema as HexCellUncheckedUpdateWithoutHexTypeInputObjectSchema } from './HexCellUncheckedUpdateWithoutHexTypeInput.schema';
import { HexCellCreateWithoutHexTypeInputObjectSchema as HexCellCreateWithoutHexTypeInputObjectSchema } from './HexCellCreateWithoutHexTypeInput.schema';
import { HexCellUncheckedCreateWithoutHexTypeInputObjectSchema as HexCellUncheckedCreateWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => HexCellUpdateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutHexTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => HexCellCreateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexTypeInputObjectSchema)])
}).strict();
export const HexCellUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutHexTypeInput>;
export const HexCellUpsertWithWhereUniqueWithoutHexTypeInputObjectZodSchema = makeSchema();
