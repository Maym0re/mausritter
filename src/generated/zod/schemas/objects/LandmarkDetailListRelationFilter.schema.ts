import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional(),
  some: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional(),
  none: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional()
}).strict();
export const LandmarkDetailListRelationFilterObjectSchema: z.ZodType<Prisma.LandmarkDetailListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailListRelationFilter>;
export const LandmarkDetailListRelationFilterObjectZodSchema = makeSchema();
