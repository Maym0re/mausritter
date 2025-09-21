import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutEntriesInputObjectSchema } from './DiceRollLogCreateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutEntriesInput.schema';
import { DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutEntriesInput.schema';
import { DiceRollLogUpsertWithoutEntriesInputObjectSchema } from './DiceRollLogUpsertWithoutEntriesInput.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectSchema } from './DiceRollLogUpdateToOneWithWhereWithoutEntriesInput.schema';
import { DiceRollLogUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUpdateWithoutEntriesInput.schema';
import { DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutEntriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DiceRollLogCreateOrConnectWithoutEntriesInputObjectSchema).optional(),
  upsert: z.lazy(() => DiceRollLogUpsertWithoutEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DiceRollLogUpdateToOneWithWhereWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUpdateWithoutEntriesInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutEntriesInputObjectSchema)]).optional()
}).strict();
export const DiceRollLogUpdateOneRequiredWithoutEntriesNestedInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateOneRequiredWithoutEntriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateOneRequiredWithoutEntriesNestedInput>;
export const DiceRollLogUpdateOneRequiredWithoutEntriesNestedInputObjectZodSchema = makeSchema();
