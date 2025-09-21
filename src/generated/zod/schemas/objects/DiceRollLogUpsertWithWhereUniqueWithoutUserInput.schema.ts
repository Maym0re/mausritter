import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateWithoutUserInputObjectSchema } from './DiceRollLogUpdateWithoutUserInput.schema';
import { DiceRollLogUncheckedUpdateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutUserInput.schema';
import { DiceRollLogCreateWithoutUserInputObjectSchema } from './DiceRollLogCreateWithoutUserInput.schema';
import { DiceRollLogUncheckedCreateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DiceRollLogUpdateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DiceRollLogUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpsertWithWhereUniqueWithoutUserInput>;
export const DiceRollLogUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
