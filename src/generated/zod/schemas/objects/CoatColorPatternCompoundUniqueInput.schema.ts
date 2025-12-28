import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  color: z.string(),
  pattern: z.string()
}).strict();
export const CoatColorPatternCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CoatColorPatternCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatColorPatternCompoundUniqueInput>;
export const CoatColorPatternCompoundUniqueInputObjectZodSchema = makeSchema();
