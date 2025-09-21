import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  details: z.boolean().optional(),
  HexCell: z.boolean().optional()
}).strict();
export const LandmarkCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LandmarkCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCountOutputTypeSelect>;
export const LandmarkCountOutputTypeSelectObjectZodSchema = makeSchema();
