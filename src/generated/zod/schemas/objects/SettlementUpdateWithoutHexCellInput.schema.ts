import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { EnumSettlementSizeFieldUpdateOperationsInputObjectSchema } from './EnumSettlementSizeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([SettlementSizeSchema, z.lazy(() => EnumSettlementSizeFieldUpdateOperationsInputObjectSchema)]).optional(),
  governance: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inhabitants: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  feature: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  industry: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  population: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SettlementUpdateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.SettlementUpdateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUpdateWithoutHexCellInput>;
export const SettlementUpdateWithoutHexCellInputObjectZodSchema = makeSchema();
