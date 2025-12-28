import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementCreateWithoutHexCellInputObjectSchema as SettlementCreateWithoutHexCellInputObjectSchema } from './SettlementCreateWithoutHexCellInput.schema';
import { SettlementUncheckedCreateWithoutHexCellInputObjectSchema as SettlementUncheckedCreateWithoutHexCellInputObjectSchema } from './SettlementUncheckedCreateWithoutHexCellInput.schema';
import { SettlementCreateOrConnectWithoutHexCellInputObjectSchema as SettlementCreateOrConnectWithoutHexCellInputObjectSchema } from './SettlementCreateOrConnectWithoutHexCellInput.schema';
import { SettlementWhereUniqueInputObjectSchema as SettlementWhereUniqueInputObjectSchema } from './SettlementWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SettlementCreateWithoutHexCellInputObjectSchema), z.lazy(() => SettlementUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SettlementCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  connect: z.lazy(() => SettlementWhereUniqueInputObjectSchema).optional()
}).strict();
export const SettlementCreateNestedOneWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementCreateNestedOneWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCreateNestedOneWithoutHexCellInput>;
export const SettlementCreateNestedOneWithoutHexCellInputObjectZodSchema = makeSchema();
