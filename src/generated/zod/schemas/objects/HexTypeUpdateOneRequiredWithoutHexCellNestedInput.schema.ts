import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateWithoutHexCellInputObjectSchema } from './HexTypeCreateWithoutHexCellInput.schema';
import { HexTypeUncheckedCreateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedCreateWithoutHexCellInput.schema';
import { HexTypeCreateOrConnectWithoutHexCellInputObjectSchema } from './HexTypeCreateOrConnectWithoutHexCellInput.schema';
import { HexTypeUpsertWithoutHexCellInputObjectSchema } from './HexTypeUpsertWithoutHexCellInput.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema';
import { HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectSchema } from './HexTypeUpdateToOneWithWhereWithoutHexCellInput.schema';
import { HexTypeUpdateWithoutHexCellInputObjectSchema } from './HexTypeUpdateWithoutHexCellInput.schema';
import { HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexTypeCreateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexTypeCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  upsert: z.lazy(() => HexTypeUpsertWithoutHexCellInputObjectSchema).optional(),
  connect: z.lazy(() => HexTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUpdateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema)]).optional()
}).strict();
export const HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateOneRequiredWithoutHexCellNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateOneRequiredWithoutHexCellNestedInput>;
export const HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectZodSchema = makeSchema();
