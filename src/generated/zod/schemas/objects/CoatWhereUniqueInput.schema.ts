import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatColorPatternCompoundUniqueInputObjectSchema as CoatColorPatternCompoundUniqueInputObjectSchema } from './CoatColorPatternCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  color_pattern: z.lazy(() => CoatColorPatternCompoundUniqueInputObjectSchema).optional()
}).strict();
export const CoatWhereUniqueInputObjectSchema: z.ZodType<Prisma.CoatWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatWhereUniqueInput>;
export const CoatWhereUniqueInputObjectZodSchema = makeSchema();
