import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryScalarWhereInputObjectSchema } from './DiceRollEntryScalarWhereInput.schema';
import { DiceRollEntryUpdateManyMutationInputObjectSchema } from './DiceRollEntryUpdateManyMutationInput.schema';
import { DiceRollEntryUncheckedUpdateManyWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedUpdateManyWithoutLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DiceRollEntryUpdateManyMutationInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedUpdateManyWithoutLogInputObjectSchema)])
}).strict();
export const DiceRollEntryUpdateManyWithWhereWithoutLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUpdateManyWithWhereWithoutLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUpdateManyWithWhereWithoutLogInput>;
export const DiceRollEntryUpdateManyWithWhereWithoutLogInputObjectZodSchema = makeSchema();
