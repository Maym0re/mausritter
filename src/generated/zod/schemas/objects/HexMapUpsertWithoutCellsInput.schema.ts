import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapUpdateWithoutCellsInputObjectSchema } from './HexMapUpdateWithoutCellsInput.schema';
import { HexMapUncheckedUpdateWithoutCellsInputObjectSchema } from './HexMapUncheckedUpdateWithoutCellsInput.schema';
import { HexMapCreateWithoutCellsInputObjectSchema } from './HexMapCreateWithoutCellsInput.schema';
import { HexMapUncheckedCreateWithoutCellsInputObjectSchema } from './HexMapUncheckedCreateWithoutCellsInput.schema';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HexMapUpdateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutCellsInputObjectSchema)]),
  create: z.union([z.lazy(() => HexMapCreateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCellsInputObjectSchema)]),
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional()
}).strict();
export const HexMapUpsertWithoutCellsInputObjectSchema: z.ZodType<Prisma.HexMapUpsertWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpsertWithoutCellsInput>;
export const HexMapUpsertWithoutCellsInputObjectZodSchema = makeSchema();
