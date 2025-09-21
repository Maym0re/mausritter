import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  HexCell: z.boolean().optional()
}).strict();
export const SettlementCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SettlementCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SettlementCountOutputTypeSelect>;
export const SettlementCountOutputTypeSelectObjectZodSchema = makeSchema();
