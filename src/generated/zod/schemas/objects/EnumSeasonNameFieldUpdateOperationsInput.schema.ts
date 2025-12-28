import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  set: SeasonNameSchema.optional()
}).strict();
export const EnumSeasonNameFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSeasonNameFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSeasonNameFieldUpdateOperationsInput>;
export const EnumSeasonNameFieldUpdateOperationsInputObjectZodSchema = makeSchema();
