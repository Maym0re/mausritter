import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateManySettlementInputObjectSchema as HexCellCreateManySettlementInputObjectSchema } from './HexCellCreateManySettlementInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => HexCellCreateManySettlementInputObjectSchema), z.lazy(() => HexCellCreateManySettlementInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const HexCellCreateManySettlementInputEnvelopeObjectSchema: z.ZodType<Prisma.HexCellCreateManySettlementInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateManySettlementInputEnvelope>;
export const HexCellCreateManySettlementInputEnvelopeObjectZodSchema = makeSchema();
