import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCreateWithoutUserInputObjectSchema } from './DiceRollLogCreateWithoutUserInput.schema';
import { DiceRollLogUncheckedCreateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DiceRollLogCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateOrConnectWithoutUserInput>;
export const DiceRollLogCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
