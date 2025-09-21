import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementUpdateWithoutHexCellInputObjectSchema } from './SettlementUpdateWithoutHexCellInput.schema';
import { SettlementUncheckedUpdateWithoutHexCellInputObjectSchema } from './SettlementUncheckedUpdateWithoutHexCellInput.schema';
import { SettlementCreateWithoutHexCellInputObjectSchema } from './SettlementCreateWithoutHexCellInput.schema';
import { SettlementUncheckedCreateWithoutHexCellInputObjectSchema } from './SettlementUncheckedCreateWithoutHexCellInput.schema';
import { SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SettlementUpdateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => SettlementCreateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => SettlementWhereInputObjectSchema).optional()
}).strict();
export const SettlementUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUpsertWithoutHexCellInput>;
export const SettlementUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
