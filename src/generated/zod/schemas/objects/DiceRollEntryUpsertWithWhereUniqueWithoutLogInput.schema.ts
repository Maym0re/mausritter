import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryUpdateWithoutLogInputObjectSchema as DiceRollEntryUpdateWithoutLogInputObjectSchema } from './DiceRollEntryUpdateWithoutLogInput.schema';
import { DiceRollEntryUncheckedUpdateWithoutLogInputObjectSchema as DiceRollEntryUncheckedUpdateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedUpdateWithoutLogInput.schema';
import { DiceRollEntryCreateWithoutLogInputObjectSchema as DiceRollEntryCreateWithoutLogInputObjectSchema } from './DiceRollEntryCreateWithoutLogInput.schema';
import { DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema as DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateWithoutLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DiceRollEntryUpdateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedUpdateWithoutLogInputObjectSchema)]),
  create: z.union([z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema)])
}).strict();
export const DiceRollEntryUpsertWithWhereUniqueWithoutLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUpsertWithWhereUniqueWithoutLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUpsertWithWhereUniqueWithoutLogInput>;
export const DiceRollEntryUpsertWithWhereUniqueWithoutLogInputObjectZodSchema = makeSchema();
