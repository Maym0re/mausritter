import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateWithoutHexCellInputObjectSchema as HexTypeCreateWithoutHexCellInputObjectSchema } from './HexTypeCreateWithoutHexCellInput.schema';
import { HexTypeUncheckedCreateWithoutHexCellInputObjectSchema as HexTypeUncheckedCreateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedCreateWithoutHexCellInput.schema';
import { HexTypeCreateOrConnectWithoutHexCellInputObjectSchema as HexTypeCreateOrConnectWithoutHexCellInputObjectSchema } from './HexTypeCreateOrConnectWithoutHexCellInput.schema';
import { HexTypeUpsertWithoutHexCellInputObjectSchema as HexTypeUpsertWithoutHexCellInputObjectSchema } from './HexTypeUpsertWithoutHexCellInput.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema';
import { HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectSchema as HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectSchema } from './HexTypeUpdateToOneWithWhereWithoutHexCellInput.schema';
import { HexTypeUpdateWithoutHexCellInputObjectSchema as HexTypeUpdateWithoutHexCellInputObjectSchema } from './HexTypeUpdateWithoutHexCellInput.schema';
import { HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema as HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexTypeCreateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexTypeCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  upsert: z.lazy(() => HexTypeUpsertWithoutHexCellInputObjectSchema).optional(),
  connect: z.lazy(() => HexTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexTypeUpdateToOneWithWhereWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUpdateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutHexCellInputObjectSchema)]).optional()
}).strict();
export const HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateOneRequiredWithoutHexCellNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateOneRequiredWithoutHexCellNestedInput>;
export const HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectZodSchema = makeSchema();
