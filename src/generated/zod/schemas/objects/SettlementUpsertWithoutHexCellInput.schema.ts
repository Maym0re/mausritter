import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementUpdateWithoutHexCellInputObjectSchema as SettlementUpdateWithoutHexCellInputObjectSchema } from './SettlementUpdateWithoutHexCellInput.schema';
import { SettlementUncheckedUpdateWithoutHexCellInputObjectSchema as SettlementUncheckedUpdateWithoutHexCellInputObjectSchema } from './SettlementUncheckedUpdateWithoutHexCellInput.schema';
import { SettlementCreateWithoutHexCellInputObjectSchema as SettlementCreateWithoutHexCellInputObjectSchema } from './SettlementCreateWithoutHexCellInput.schema';
import { SettlementUncheckedCreateWithoutHexCellInputObjectSchema as SettlementUncheckedCreateWithoutHexCellInputObjectSchema } from './SettlementUncheckedCreateWithoutHexCellInput.schema';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SettlementUpdateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => SettlementCreateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => SettlementWhereInputObjectSchema).optional()
}).strict();
export const SettlementUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUpsertWithoutHexCellInput>;
export const SettlementUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
