import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollEntrySelectObjectSchema as DiceRollEntrySelectObjectSchema } from './objects/DiceRollEntrySelect.schema';
import { DiceRollEntryCreateManyInputObjectSchema as DiceRollEntryCreateManyInputObjectSchema } from './objects/DiceRollEntryCreateManyInput.schema';

export const DiceRollEntryCreateManyAndReturnSchema: z.ZodType<Prisma.DiceRollEntryCreateManyAndReturnArgs> = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), data: z.union([ DiceRollEntryCreateManyInputObjectSchema, z.array(DiceRollEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollEntryCreateManyAndReturnArgs>;

export const DiceRollEntryCreateManyAndReturnZodSchema = z.object({ select: DiceRollEntrySelectObjectSchema.optional(), data: z.union([ DiceRollEntryCreateManyInputObjectSchema, z.array(DiceRollEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();