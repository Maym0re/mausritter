import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellUpdateWithoutHexMapInputObjectSchema as HexCellUpdateWithoutHexMapInputObjectSchema } from './HexCellUpdateWithoutHexMapInput.schema';
import { HexCellUncheckedUpdateWithoutHexMapInputObjectSchema as HexCellUncheckedUpdateWithoutHexMapInputObjectSchema } from './HexCellUncheckedUpdateWithoutHexMapInput.schema';
import { HexCellCreateWithoutHexMapInputObjectSchema as HexCellCreateWithoutHexMapInputObjectSchema } from './HexCellCreateWithoutHexMapInput.schema';
import { HexCellUncheckedCreateWithoutHexMapInputObjectSchema as HexCellUncheckedCreateWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => HexCellUpdateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUncheckedUpdateWithoutHexMapInputObjectSchema)]),
  create: z.union([z.lazy(() => HexCellCreateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpsertWithWhereUniqueWithoutHexMapInput>;
export const HexCellUpsertWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
