import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LandmarkWhereInputObjectSchema).optional(),
  some: z.lazy(() => LandmarkWhereInputObjectSchema).optional(),
  none: z.lazy(() => LandmarkWhereInputObjectSchema).optional()
}).strict();
export const LandmarkListRelationFilterObjectSchema: z.ZodType<Prisma.LandmarkListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkListRelationFilter>;
export const LandmarkListRelationFilterObjectZodSchema = makeSchema();
