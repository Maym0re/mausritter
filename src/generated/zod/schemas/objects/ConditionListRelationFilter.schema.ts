import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './ConditionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ConditionWhereInputObjectSchema).optional(),
  some: z.lazy(() => ConditionWhereInputObjectSchema).optional(),
  none: z.lazy(() => ConditionWhereInputObjectSchema).optional()
}).strict();
export const ConditionListRelationFilterObjectSchema: z.ZodType<Prisma.ConditionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConditionListRelationFilter>;
export const ConditionListRelationFilterObjectZodSchema = makeSchema();
