import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string().optional()
}).strict();
export const HexMapWhereUniqueInputObjectSchema: z.ZodType<Prisma.HexMapWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapWhereUniqueInput>;
export const HexMapWhereUniqueInputObjectZodSchema = makeSchema();
