import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ConditionCreateeffectsInputObjectSchema: z.ZodType<Prisma.ConditionCreateeffectsInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCreateeffectsInput>;
export const ConditionCreateeffectsInputObjectZodSchema = makeSchema();
