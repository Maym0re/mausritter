import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogUpdateWithoutEntriesInputObjectSchema as DiceRollLogUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUpdateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema as DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutEntriesInput.schema';
import { DiceRollLogCreateWithoutEntriesInputObjectSchema as DiceRollLogCreateWithoutEntriesInputObjectSchema } from './DiceRollLogCreateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema as DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutEntriesInput.schema';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './DiceRollLogWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DiceRollLogUpdateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema)]),
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema)]),
  where: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional()
}).strict();
export const DiceRollLogUpsertWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpsertWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpsertWithoutEntriesInput>;
export const DiceRollLogUpsertWithoutEntriesInputObjectZodSchema = makeSchema();
