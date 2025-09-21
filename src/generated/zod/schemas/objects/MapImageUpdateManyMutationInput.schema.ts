import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  x: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  y: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  width: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  height: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MapImageUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.MapImageUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUpdateManyMutationInput>;
export const MapImageUpdateManyMutationInputObjectZodSchema = makeSchema();
