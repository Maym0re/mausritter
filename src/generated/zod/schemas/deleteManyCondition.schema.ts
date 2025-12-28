import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ConditionWhereInputObjectSchema as ConditionWhereInputObjectSchema } from './objects/ConditionWhereInput.schema';

export const ConditionDeleteManySchema: z.ZodType<Prisma.ConditionDeleteManyArgs> = z.object({ where: ConditionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ConditionDeleteManyArgs>;

export const ConditionDeleteManyZodSchema = z.object({ where: ConditionWhereInputObjectSchema.optional() }).strict();