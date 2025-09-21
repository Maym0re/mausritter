import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellCreateWithoutSettlementInputObjectSchema } from './HexCellCreateWithoutSettlementInput.schema';
import { HexCellUncheckedCreateWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateWithoutSettlementInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema)])
}).strict();
export const HexCellCreateOrConnectWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellCreateOrConnectWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateOrConnectWithoutSettlementInput>;
export const HexCellCreateOrConnectWithoutSettlementInputObjectZodSchema = makeSchema();
