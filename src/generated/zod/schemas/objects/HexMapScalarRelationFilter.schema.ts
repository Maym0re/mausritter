import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => HexMapWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => HexMapWhereInputObjectSchema).optional()
}).strict();
export const HexMapScalarRelationFilterObjectSchema: z.ZodType<Prisma.HexMapScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HexMapScalarRelationFilter>;
export const HexMapScalarRelationFilterObjectZodSchema = makeSchema();
