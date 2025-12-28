import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  data: z.string(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MapImageUncheckedCreateWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUncheckedCreateWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUncheckedCreateWithoutHexMapInput>;
export const MapImageUncheckedCreateWithoutHexMapInputObjectZodSchema = makeSchema();
