import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeUpdateWithoutHexCellInputObjectSchema } from './HexTypeUpdateWithoutHexCellInput.schema';
import { HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedUpdateWithoutHexCellInput.schema';
import { HexTypeCreateWithoutHexCellInputObjectSchema } from './HexTypeCreateWithoutHexCellInput.schema';
import { HexTypeUncheckedCreateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedCreateWithoutHexCellInput.schema';
import { HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HexTypeUpdateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => HexTypeCreateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => HexTypeWhereInputObjectSchema).optional()
}).strict();
export const HexTypeUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpsertWithoutHexCellInput>;
export const HexTypeUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
