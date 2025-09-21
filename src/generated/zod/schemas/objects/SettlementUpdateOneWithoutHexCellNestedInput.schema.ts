import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementCreateWithoutHexCellInputObjectSchema } from './SettlementCreateWithoutHexCellInput.schema';
import { SettlementUncheckedCreateWithoutHexCellInputObjectSchema } from './SettlementUncheckedCreateWithoutHexCellInput.schema';
import { SettlementCreateOrConnectWithoutHexCellInputObjectSchema } from './SettlementCreateOrConnectWithoutHexCellInput.schema';
import { SettlementUpsertWithoutHexCellInputObjectSchema } from './SettlementUpsertWithoutHexCellInput.schema';
import { SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema';
import { SettlementWhereUniqueInputObjectSchema } from './SettlementWhereUniqueInput.schema';
import { SettlementUpdateToOneWithWhereWithoutHexCellInputObjectSchema } from './SettlementUpdateToOneWithWhereWithoutHexCellInput.schema';
import { SettlementUpdateWithoutHexCellInputObjectSchema } from './SettlementUpdateWithoutHexCellInput.schema';
import { SettlementUncheckedUpdateWithoutHexCellInputObjectSchema } from './SettlementUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SettlementCreateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SettlementCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  upsert: z.lazy(() => SettlementUpsertWithoutHexCellInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SettlementWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SettlementWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SettlementWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SettlementUpdateToOneWithWhereWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUpdateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedUpdateWithoutHexCellInputObjectSchema)]).optional()
}).strict();
export const SettlementUpdateOneWithoutHexCellNestedInputObjectSchema: z.ZodType<Prisma.SettlementUpdateOneWithoutHexCellNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUpdateOneWithoutHexCellNestedInput>;
export const SettlementUpdateOneWithoutHexCellNestedInputObjectZodSchema = makeSchema();
