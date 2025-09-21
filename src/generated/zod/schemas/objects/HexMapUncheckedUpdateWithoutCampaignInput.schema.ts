import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexMapNestedInput.schema';
import { MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapImageUncheckedUpdateManyWithoutHexMapNestedInput.schema';
import { MapMarkerUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapMarkerUncheckedUpdateManyWithoutHexMapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerX: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerY: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cells: z.lazy(() => HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  images: z.lazy(() => MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedUpdateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedUpdateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedUpdateWithoutCampaignInput>;
export const HexMapUncheckedUpdateWithoutCampaignInputObjectZodSchema = makeSchema();
