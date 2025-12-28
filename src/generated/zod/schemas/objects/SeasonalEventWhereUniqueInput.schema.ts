import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SeasonalEventWhereUniqueInputObjectSchema: z.ZodType<Prisma.SeasonalEventWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SeasonalEventWhereUniqueInput>;
export const SeasonalEventWhereUniqueInputObjectZodSchema = makeSchema();
