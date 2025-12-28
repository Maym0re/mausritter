import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogCreateManyInputObjectSchema as DiceRollLogCreateManyInputObjectSchema } from './objects/DiceRollLogCreateManyInput.schema';

export const DiceRollLogCreateManySchema: z.ZodType<Prisma.DiceRollLogCreateManyArgs> = z.object({ data: z.union([ DiceRollLogCreateManyInputObjectSchema, z.array(DiceRollLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyArgs>;

export const DiceRollLogCreateManyZodSchema = z.object({ data: z.union([ DiceRollLogCreateManyInputObjectSchema, z.array(DiceRollLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();