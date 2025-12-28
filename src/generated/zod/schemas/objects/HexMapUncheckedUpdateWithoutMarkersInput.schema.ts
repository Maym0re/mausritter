import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema as HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './HexCellUncheckedUpdateManyWithoutHexMapNestedInput.schema';
import { MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema as MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapImageUncheckedUpdateManyWithoutHexMapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaignId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerX: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerY: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cells: z.lazy(() => HexCellUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  images: z.lazy(() => MapImageUncheckedUpdateManyWithoutHexMapNestedInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedUpdateWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedUpdateWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedUpdateWithoutMarkersInput>;
export const HexMapUncheckedUpdateWithoutMarkersInputObjectZodSchema = makeSchema();
