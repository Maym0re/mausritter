import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutEntriesInputObjectSchema } from './DiceRollLogCreateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutEntriesInput.schema';
import { DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutEntriesInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).optional()
}).strict();
export const DiceRollLogCreateNestedOneWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateNestedOneWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateNestedOneWithoutEntriesInput>;
export const DiceRollLogCreateNestedOneWithoutEntriesInputObjectZodSchema = makeSchema();
