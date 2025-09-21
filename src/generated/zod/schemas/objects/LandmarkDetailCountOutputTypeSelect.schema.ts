import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  HexCell: z.boolean().optional()
}).strict();
export const LandmarkDetailCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LandmarkDetailCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCountOutputTypeSelect>;
export const LandmarkDetailCountOutputTypeSelectObjectZodSchema = makeSchema();
