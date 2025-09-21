import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementWhereUniqueInputObjectSchema } from './SettlementWhereUniqueInput.schema';
import { SettlementCreateWithoutHexCellInputObjectSchema } from './SettlementCreateWithoutHexCellInput.schema';
import { SettlementUncheckedCreateWithoutHexCellInputObjectSchema } from './SettlementUncheckedCreateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SettlementWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SettlementCreateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedCreateWithoutHexCellInputObjectSchema)])
}).strict();
export const SettlementCreateOrConnectWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementCreateOrConnectWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCreateOrConnectWithoutHexCellInput>;
export const SettlementCreateOrConnectWithoutHexCellInputObjectZodSchema = makeSchema();
