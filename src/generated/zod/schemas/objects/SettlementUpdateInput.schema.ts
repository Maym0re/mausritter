import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SettlementSizeSchema } from '../enums/SettlementSize.schema';
import { EnumSettlementSizeFieldUpdateOperationsInputObjectSchema as EnumSettlementSizeFieldUpdateOperationsInputObjectSchema } from './EnumSettlementSizeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { HexCellUpdateManyWithoutSettlementNestedInputObjectSchema as HexCellUpdateManyWithoutSettlementNestedInputObjectSchema } from './HexCellUpdateManyWithoutSettlementNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([SettlementSizeSchema, z.lazy(() => EnumSettlementSizeFieldUpdateOperationsInputObjectSchema)]).optional(),
  governance: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inhabitants: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  feature: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  industry: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  population: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  HexCell: z.lazy(() => HexCellUpdateManyWithoutSettlementNestedInputObjectSchema).optional()
}).strict();
export const SettlementUpdateInputObjectSchema: z.ZodType<Prisma.SettlementUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementUpdateInput>;
export const SettlementUpdateInputObjectZodSchema = makeSchema();
