import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCreateWithoutEntriesInputObjectSchema } from './DiceRollLogCreateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema)])
}).strict();
export const DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateOrConnectWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateOrConnectWithoutEntriesInput>;
export const DiceRollLogCreateOrConnectWithoutEntriesInputObjectZodSchema = makeSchema();
