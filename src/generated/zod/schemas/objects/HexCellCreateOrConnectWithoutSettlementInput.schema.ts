import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellCreateWithoutSettlementInputObjectSchema as HexCellCreateWithoutSettlementInputObjectSchema } from './HexCellCreateWithoutSettlementInput.schema';
import { HexCellUncheckedCreateWithoutSettlementInputObjectSchema as HexCellUncheckedCreateWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema)])
}).strict();
export const HexCellCreateOrConnectWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellCreateOrConnectWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateOrConnectWithoutSettlementInput>;
export const HexCellCreateOrConnectWithoutSettlementInputObjectZodSchema = makeSchema();
