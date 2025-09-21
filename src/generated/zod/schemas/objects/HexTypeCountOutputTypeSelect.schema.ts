import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  landmarks: z.boolean().optional(),
  HexCell: z.boolean().optional()
}).strict();
export const HexTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.HexTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCountOutputTypeSelect>;
export const HexTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
