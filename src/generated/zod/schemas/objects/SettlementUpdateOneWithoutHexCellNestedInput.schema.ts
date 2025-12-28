import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementCreateWithoutHexCellInputObjectSchema as SettlementCreateWithoutHexCellInputObjectSchema } from './SettlementCreateWithoutHexCellInput.schema';
import { SettlementUncheckedCreateWithoutHexCellInputObjectSchema as SettlementUncheckedCreateWithoutHexCellInputObjectSchema } from './SettlementUncheckedCreateWithoutHexCellInput.schema';
import { SettlementCreateOrConnectWithoutHexCellInputObjectSchema as SettlementCreateOrConnectWithoutHexCellInputObjectSchema } from './SettlementCreateOrConnectWithoutHexCellInput.schema';
import { SettlementUpsertWithoutHexCellInputObjectSchema as SettlementUpsertWithoutHexCellInputObjectSchema } from './SettlementUpsertWithoutHexCellInput.schema';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema';
import { SettlementWhereUniqueInputObjectSchema as SettlementWhereUniqueInputObjectSchema } from './SettlementWhereUniqueInput.schema';
import { SettlementUpdateToOneWithWhereWithoutHexCellInputObjectSchema as SettlementUpdateToOneWithWhereWithoutHexCellInputObjectSchema } from './SettlementUpdateToOneWithWhereWithoutHexCellInput.schema';
import { SettlementUpdateWithoutHexCellInputObjectSchema as SettlementUpdateWithoutHexCellInputObjectSchema } from './SettlementUpdateWithoutHexCellInput.schema';
import { SettlementUncheckedUpdateWithoutHexCellInputObjectSchema as SettlementUncheckedUpdateWithoutHexCellInputObjectSchema } from './SettlementUncheckedUpdateWithoutHexCellInput.schema'

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
