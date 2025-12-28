import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const LandmarkWhereUniqueInputObjectSchema: z.ZodType<Prisma.LandmarkWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkWhereUniqueInput>;
export const LandmarkWhereUniqueInputObjectZodSchema = makeSchema();
