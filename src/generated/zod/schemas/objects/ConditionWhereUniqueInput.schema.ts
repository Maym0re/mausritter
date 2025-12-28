import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional()
}).strict();
export const ConditionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ConditionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionWhereUniqueInput>;
export const ConditionWhereUniqueInputObjectZodSchema = makeSchema();
