import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntryCreateManyInputObjectSchema as DiceRollEntryCreateManyInputObjectSchema } from './objects/DiceRollEntryCreateManyInput.schema';

export const DiceRollEntryCreateManySchema: z.ZodType<Prisma.DiceRollEntryCreateManyArgs> = z.object({ data: z.union([ DiceRollEntryCreateManyInputObjectSchema, z.array(DiceRollEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryCreateManyArgs>;

export const DiceRollEntryCreateManyZodSchema = z.object({ data: z.union([ DiceRollEntryCreateManyInputObjectSchema, z.array(DiceRollEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();