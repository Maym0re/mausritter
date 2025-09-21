import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogScalarWhereInputObjectSchema } from './DiceRollLogScalarWhereInput.schema';
import { DiceRollLogUpdateManyMutationInputObjectSchema } from './DiceRollLogUpdateManyMutationInput.schema';
import { DiceRollLogUncheckedUpdateManyWithoutUserInputObjectSchema } from './DiceRollLogUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DiceRollLogUpdateManyMutationInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const DiceRollLogUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateManyWithWhereWithoutUserInput>;
export const DiceRollLogUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
