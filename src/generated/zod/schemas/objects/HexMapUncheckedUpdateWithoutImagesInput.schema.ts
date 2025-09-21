import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexMapNestedInput.schema';
import { MapMarkerUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapMarkerUncheckedUpdateManyWithoutHexMapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaignId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerX: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerY: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cells: z.lazy(() => HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedUpdateWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedUpdateWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedUpdateWithoutImagesInput>;
export const HexMapUncheckedUpdateWithoutImagesInputObjectZodSchema = makeSchema();
