import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DiceRollLogUpdateManyMutationInputObjectSchema as DiceRollLogUpdateManyMutationInputObjectSchema } from './objects/DiceRollLogUpdateManyMutationInput.schema';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './objects/DiceRollLogWhereInput.schema';

export const DiceRollLogUpdateManySchema: z.ZodType<Prisma.DiceRollLogUpdateManyArgs> = z.object({ data: DiceRollLogUpdateManyMutationInputObjectSchema, where: DiceRollLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DiceRollLogUpdateManyArgs>;

export const DiceRollLogUpdateManyZodSchema = z.object({ data: DiceRollLogUpdateManyMutationInputObjectSchema, where: DiceRollLogWhereInputObjectSchema.optional() }).strict();