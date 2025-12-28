import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string().optional()
}).strict();
export const GameTimeWhereUniqueInputObjectSchema: z.ZodType<Prisma.GameTimeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeWhereUniqueInput>;
export const GameTimeWhereUniqueInputObjectZodSchema = makeSchema();
