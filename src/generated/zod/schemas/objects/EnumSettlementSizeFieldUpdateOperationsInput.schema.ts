import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema'

const makeSchema = () => z.object({
  set: SettlementSizeSchema.optional()
}).strict();
export const EnumSettlementSizeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSettlementSizeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSettlementSizeFieldUpdateOperationsInput>;
export const EnumSettlementSizeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
