import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const HexTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.HexTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeWhereUniqueInput>;
export const HexTypeWhereUniqueInputObjectZodSchema = makeSchema();
