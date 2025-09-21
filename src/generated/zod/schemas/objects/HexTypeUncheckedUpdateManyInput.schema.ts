import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const HexTypeUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.HexTypeUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUncheckedUpdateManyInput>;
export const HexTypeUncheckedUpdateManyInputObjectZodSchema = makeSchema();
