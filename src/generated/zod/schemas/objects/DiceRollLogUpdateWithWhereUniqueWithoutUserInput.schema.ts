import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateWithoutUserInputObjectSchema } from './DiceRollLogUpdateWithoutUserInput.schema';
import { DiceRollLogUncheckedUpdateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DiceRollLogUpdateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const DiceRollLogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateWithWhereUniqueWithoutUserInput>;
export const DiceRollLogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
