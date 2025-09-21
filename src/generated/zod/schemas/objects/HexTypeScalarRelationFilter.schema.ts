import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => HexTypeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => HexTypeWhereInputObjectSchema).optional()
}).strict();
export const HexTypeScalarRelationFilterObjectSchema: z.ZodType<Prisma.HexTypeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeScalarRelationFilter>;
export const HexTypeScalarRelationFilterObjectZodSchema = makeSchema();
