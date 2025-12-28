import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryCreateWithoutLogInputObjectSchema as DiceRollEntryCreateWithoutLogInputObjectSchema } from './DiceRollEntryCreateWithoutLogInput.schema';
import { DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema as DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateWithoutLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema)])
}).strict();
export const DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCreateOrConnectWithoutLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCreateOrConnectWithoutLogInput>;
export const DiceRollEntryCreateOrConnectWithoutLogInputObjectZodSchema = makeSchema();
