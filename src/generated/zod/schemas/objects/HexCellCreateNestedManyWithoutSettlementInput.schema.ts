import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutSettlementInputObjectSchema as HexCellCreateWithoutSettlementInputObjectSchema } from './HexCellCreateWithoutSettlementInput.schema';
import { HexCellUncheckedCreateWithoutSettlementInputObjectSchema as HexCellUncheckedCreateWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateWithoutSettlementInput.schema';
import { HexCellCreateOrConnectWithoutSettlementInputObjectSchema as HexCellCreateOrConnectWithoutSettlementInputObjectSchema } from './HexCellCreateOrConnectWithoutSettlementInput.schema';
import { HexCellCreateManySettlementInputEnvelopeObjectSchema as HexCellCreateManySettlementInputEnvelopeObjectSchema } from './HexCellCreateManySettlementInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutSettlementInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutSettlementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManySettlementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HexCellCreateNestedManyWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellCreateNestedManyWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateNestedManyWithoutSettlementInput>;
export const HexCellCreateNestedManyWithoutSettlementInputObjectZodSchema = makeSchema();
