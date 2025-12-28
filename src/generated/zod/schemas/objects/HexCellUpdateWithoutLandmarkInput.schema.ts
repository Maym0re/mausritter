import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HexMapUpdateOneRequiredWithoutCellsNestedInputObjectSchema as HexMapUpdateOneRequiredWithoutCellsNestedInputObjectSchema } from './HexMapUpdateOneRequiredWithoutCellsNestedInput.schema';
import { HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectSchema as HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectSchema } from './HexTypeUpdateOneRequiredWithoutHexCellNestedInput.schema';
import { LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectSchema as LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectSchema } from './LandmarkDetailUpdateOneWithoutHexCellNestedInput.schema';
import { SettlementUpdateOneWithoutHexCellNestedInputObjectSchema as SettlementUpdateOneWithoutHexCellNestedInputObjectSchema } from './SettlementUpdateOneWithoutHexCellNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  q: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  r: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  s: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isRevealed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  customName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  masterNotes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  hexMap: z.lazy(() => HexMapUpdateOneRequiredWithoutCellsNestedInputObjectSchema).optional(),
  hexType: z.lazy(() => HexTypeUpdateOneRequiredWithoutHexCellNestedInputObjectSchema).optional(),
  landmarkDetail: z.lazy(() => LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectSchema).optional(),
  settlement: z.lazy(() => SettlementUpdateOneWithoutHexCellNestedInputObjectSchema).optional()
}).strict();
export const HexCellUpdateWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithoutLandmarkInput>;
export const HexCellUpdateWithoutLandmarkInputObjectZodSchema = makeSchema();
