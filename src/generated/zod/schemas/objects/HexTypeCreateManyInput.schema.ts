import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  description: z.string()
}).strict();
export const HexTypeCreateManyInputObjectSchema: z.ZodType<Prisma.HexTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateManyInput>;
export const HexTypeCreateManyInputObjectZodSchema = makeSchema();
