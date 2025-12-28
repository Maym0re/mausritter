import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutEntriesInputObjectSchema as DiceRollLogCreateWithoutEntriesInputObjectSchema } from './DiceRollLogCreateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema as DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutEntriesInput.schema';
import { DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema as DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutEntriesInput.schema';
import { DiceRollLogUpsertWithoutEntriesInputObjectSchema as DiceRollLogUpsertWithoutEntriesInputObjectSchema } from './DiceRollLogUpsertWithoutEntriesInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectSchema as DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectSchema } from './DiceRollLogUpdateToOneWithWhereWithoutEntriesInput.schema';
import { DiceRollLogUpdateWithoutEntriesInputObjectSchema as DiceRollLogUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUpdateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema as DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutEntriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema).optional(),
  upsert: z.lazy(() => DiceRollLogUpsertWithoutEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUpdateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema)]).optional()
}).strict();
export const DiceRollLogUpdateOneRequiredWithoutEntriesNestedInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateOneRequiredWithoutEntriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateOneRequiredWithoutEntriesNestedInput>;
export const DiceRollLogUpdateOneRequiredWithoutEntriesNestedInputObjectZodSchema = makeSchema();
