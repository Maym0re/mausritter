import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MapImageWhereUniqueInputObjectSchema: z.ZodType<Prisma.MapImageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageWhereUniqueInput>;
export const MapImageWhereUniqueInputObjectZodSchema = makeSchema();
