import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema';
import { HexTypeUpdateWithoutHexCellInputObjectSchema } from './HexTypeUpdateWithoutHexCellInput.schema';
import { HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexTypeUpdateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema)])
}).strict();
export const HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateToOneWithWhereWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateToOneWithWhereWithoutHexCellInput>;
export const HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectZodSchema = makeSchema();
