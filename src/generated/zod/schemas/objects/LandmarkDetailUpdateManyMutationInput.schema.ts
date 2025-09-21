import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  effect: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const LandmarkDetailUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateManyMutationInput>;
export const LandmarkDetailUpdateManyMutationInputObjectZodSchema = makeSchema();
