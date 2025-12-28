import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogSelectObjectSchema as DiceRollLogSelectObjectSchema } from './objects/DiceRollLogSelect.schema';
import { DiceRollLogUpdateManyMutationInputObjectSchema as DiceRollLogUpdateManyMutationInputObjectSchema } from './objects/DiceRollLogUpdateManyMutationInput.schema';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';

export const DiceRollLogUpdateManyAndReturnSchema: z.ZodType<Prisma.DiceRollLogUpdateManyAndReturnArgs> = z.object({ select: DiceRollLogSelectObjectSchema.optional(), data: DiceRollLogUpdateManyMutationInputObjectSchema, where: DiceRollLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogUpdateManyAndReturnArgs>;

export const DiceRollLogUpdateManyAndReturnZodSchema = z.object({ select: DiceRollLogSelectObjectSchema.optional(), data: DiceRollLogUpdateManyMutationInputObjectSchema, where: DiceRollLogWhereInputObjectSchema.optional() }).strict();