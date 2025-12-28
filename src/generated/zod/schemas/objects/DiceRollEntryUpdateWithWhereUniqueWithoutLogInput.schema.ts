import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryUpdateWithoutLogInputObjectSchema as DiceRollEntryUpdateWithoutLogInputObjectSchema } from './DiceRollEntryUpdateWithoutLogInput.schema';
import { DiceRollEntryUncheckedUpdateWithoutLogInputObjectSchema as DiceRollEntryUncheckedUpdateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedUpdateWithoutLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DiceRollEntryUpdateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedUpdateWithoutLogInputObjectSchema)])
}).strict();
export const DiceRollEntryUpdateWithWhereUniqueWithoutLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUpdateWithWhereUniqueWithoutLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUpdateWithWhereUniqueWithoutLogInput>;
export const DiceRollEntryUpdateWithWhereUniqueWithoutLogInputObjectZodSchema = makeSchema();
