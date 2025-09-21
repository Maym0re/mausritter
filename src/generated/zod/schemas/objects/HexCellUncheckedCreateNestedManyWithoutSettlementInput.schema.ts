import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutSettlementInputObjectSchema } from './HexCellCreateWithoutSettlementInput.schema';
import { HexCellUncheckedCreateWithoutSettlementInputObjectSchema } from './HexCellUncheckedCreateWithoutSettlementInput.schema';
import { HexCellCreateOrConnectWithoutSettlementInputObjectSchema } from './HexCellCreateOrConnectWithoutSettlementInput.schema';
import { HexCellCreateManySettlementInputEnvelopeObjectSchema } from './HexCellCreateManySettlementInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellCreateWithoutSettlementInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutSettlementInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutSettlementInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutSettlementInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManySettlementInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedCreateNestedManyWithoutSettlementInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedCreateNestedManyWithoutSettlementInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedCreateNestedManyWithoutSettlementInput>;
export const HexCellUncheckedCreateNestedManyWithoutSettlementInputObjectZodSchema = makeSchema();
