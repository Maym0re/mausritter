import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ConditionUpdateeffectsInputObjectSchema as ConditionUpdateeffectsInputObjectSchema } from './ConditionUpdateeffectsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CharacterUpdateManyWithoutConditionsNestedInputObjectSchema as CharacterUpdateManyWithoutConditionsNestedInputObjectSchema } from './CharacterUpdateManyWithoutConditionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clearRequirement: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  effects: z.union([z.lazy(() => ConditionUpdateeffectsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  characters: z.lazy(() => CharacterUpdateManyWithoutConditionsNestedInputObjectSchema).optional()
}).strict();
export const ConditionUpdateInputObjectSchema: z.ZodType<Prisma.ConditionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUpdateInput>;
export const ConditionUpdateInputObjectZodSchema = makeSchema();
