import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutEntriesInputObjectSchema as DiceRollLogCreateWithoutEntriesInputObjectSchema } from './DiceRollLogCreateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema as DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutEntriesInput.schema';
import { DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema as DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutEntriesInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).optional()
}).strict();
export const DiceRollLogCreateNestedOneWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateNestedOneWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateNestedOneWithoutEntriesInput>;
export const DiceRollLogCreateNestedOneWithoutEntriesInputObjectZodSchema = makeSchema();
