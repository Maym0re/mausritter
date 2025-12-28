import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SettlementWhereUniqueInputObjectSchema: z.ZodType<Prisma.SettlementWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SettlementWhereUniqueInput>;
export const SettlementWhereUniqueInputObjectZodSchema = makeSchema();
