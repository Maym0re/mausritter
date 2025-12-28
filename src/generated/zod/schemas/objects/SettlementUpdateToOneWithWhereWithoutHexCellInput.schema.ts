import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema';
import { SettlementUpdateWithoutHexCellInputObjectSchema as SettlementUpdateWithoutHexCellInputObjectSchema } from './SettlementUpdateWithoutHexCellInput.schema';
import { SettlementUncheckedUpdateWithoutHexCellInputObjectSchema as SettlementUncheckedUpdateWithoutHexCellInputObjectSchema } from './SettlementUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SettlementWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SettlementUpdateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedUpdateWithoutHexCellInputObjectSchema)])
}).strict();
export const SettlementUpdateToOneWithWhereWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementUpdateToOneWithWhereWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUpdateToOneWithWhereWithoutHexCellInput>;
export const SettlementUpdateToOneWithWhereWithoutHexCellInputObjectZodSchema = makeSchema();
