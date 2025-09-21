import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema } from './CampaignUpdateOneRequiredWithoutHexMapNestedInput.schema';
import { HexCellUpdateManyWithoutHexMapNestedInputObjectSchema } from './HexCellUpdateManyWithoutHexMapNestedInput.schema';
import { MapImageUpdateManyWithoutHexMapNestedInputObjectSchema } from './MapImageUpdateManyWithoutHexMapNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerX: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  centerY: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  campaign: z.lazy(() => CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema).optional(),
  cells: z.lazy(() => HexCellUpdateManyWithoutHexMapNestedInputObjectSchema).optional(),
  images: z.lazy(() => MapImageUpdateManyWithoutHexMapNestedInputObjectSchema).optional()
}).strict();
export const HexMapUpdateWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapUpdateWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateWithoutMarkersInput>;
export const HexMapUpdateWithoutMarkersInputObjectZodSchema = makeSchema();
