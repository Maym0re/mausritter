import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  cells: z.boolean().optional(),
  images: z.boolean().optional(),
  markers: z.boolean().optional()
}).strict();
export const HexMapCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.HexMapCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCountOutputTypeSelect>;
export const HexMapCountOutputTypeSelectObjectZodSchema = makeSchema();
