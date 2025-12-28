import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogSelectObjectSchema as DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogCreateManyInputObjectSchema as DiceRollLogCreateManyInputObjectSchema } from './objects/DiceRollLogCreateManyInput.schema';

export const DiceRollLogCreateManyAndReturnSchema: z.ZodType<Prisma.DiceRollLogCreateManyAndReturnArgs> = z.object({ select: DiceRollLogSelectObjectSchema.optional(), data: z.union([ DiceRollLogCreateManyInputObjectSchema, z.array(DiceRollLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogCreateManyAndReturnArgs>;

export const DiceRollLogCreateManyAndReturnZodSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), data: z.union([ DiceRollLogCreateManyInputObjectSchema, z.array(DiceRollLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();