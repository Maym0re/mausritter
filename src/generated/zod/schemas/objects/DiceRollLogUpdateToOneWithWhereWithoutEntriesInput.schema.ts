import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereInputObjectSchema as DiceRollLogWhereInputObjectSchema } from './DiceRollLogWhereInput.schema';
import { DiceRollLogUpdateWithoutEntriesInputObjectSchema as DiceRollLogUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUpdateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema as DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DiceRollLogUpdateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema)])
}).strict();
export const DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateToOneWithWhereWithoutEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateToOneWithWhereWithoutEntriesInput>;
export const DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectZodSchema = makeSchema();
