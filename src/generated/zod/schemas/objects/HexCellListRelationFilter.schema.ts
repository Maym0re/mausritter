import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereInputObjectSchema } from './HexCellWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => HexCellWhereInputObjectSchema).optional(),
  some: z.lazy(() => HexCellWhereInputObjectSchema).optional(),
  none: z.lazy(() => HexCellWhereInputObjectSchema).optional()
}).strict();
export const HexCellListRelationFilterObjectSchema: z.ZodType<Prisma.HexCellListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HexCellListRelationFilter>;
export const HexCellListRelationFilterObjectZodSchema = makeSchema();
