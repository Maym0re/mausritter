import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  sign: z.string().optional()
}).strict();
export const BirthsignWhereUniqueInputObjectSchema: z.ZodType<Prisma.BirthsignWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignWhereUniqueInput>;
export const BirthsignWhereUniqueInputObjectZodSchema = makeSchema();
