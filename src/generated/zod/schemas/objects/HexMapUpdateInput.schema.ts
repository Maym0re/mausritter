import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema as CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema } from './CampaignUpdateOneRequiredWithoutHexMapNestedInput.schema';
import { HexCellUpdateManyWithoutHexMapNestedInputObjectSchema as HexCellUpdateManyWithoutHexMapNestedInputObjectSchema } from './HexCellUpdateManyWithoutHexMapNestedInput.schema';
import { MapImageUpdateManyWithoutHexMapNestedInputObjectSchema as MapImageUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapImageUpdateManyWithoutHexMapNestedInput.schema';
import { MapMarkerUpdateManyWithoutHexMapNestedInputObjectSchema as MapMarkerUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapMarkerUpdateManyWithoutHexMapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerX: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerY: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaign: z.lazy(() => CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema).optional(),
  cells: z.lazy(() => HexCellUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  images: z.lazy(() => MapImageUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  markers: z.lazy(() => MapMarkerUpdateManyWithoutHexMapNestedInputObjectSchema).optional()
}).strict();
export const HexMapUpdateInputObjectSchema: z.ZodType<Prisma.HexMapUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateInput>;
export const HexMapUpdateInputObjectZodSchema = makeSchema();
