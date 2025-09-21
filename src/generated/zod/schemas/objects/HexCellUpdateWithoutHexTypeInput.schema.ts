import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HexMapUpdateOneRequiredWithoutCellsNestedInputObjectSchema } from './HexMapUpdateOneRequiredWithoutCellsNestedInput.schema';
import { LandmarkUpdateOneWithoutHexCellNestedInputObjectSchema } from './LandmarkUpdateOneWithoutHexCellNestedInput.schema';
import { LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectSchema } from './LandmarkDetailUpdateOneWithoutHexCellNestedInput.schema';
import { SettlementUpdateOneWithoutHexCellNestedInputObjectSchema } from './SettlementUpdateOneWithoutHexCellNestedInput.schema'

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
  landmark: z.lazy(() => LandmarkUpdateOneWithoutHexCellNestedInputObjectSchema).optional(),
  landmarkDetail: z.lazy(() => LandmarkDetailUpdateOneWithoutHexCellNestedInputObjectSchema).optional(),
  settlement: z.lazy(() => SettlementUpdateOneWithoutHexCellNestedInputObjectSchema).optional()
}).strict();
export const HexCellUpdateWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellUpdateWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUpdateWithoutHexTypeInput>;
export const HexCellUpdateWithoutHexTypeInputObjectZodSchema = makeSchema();
