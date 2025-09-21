import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryCreateWithoutLogInputObjectSchema } from './DiceRollEntryCreateWithoutLogInput.schema';
import { DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateWithoutLogInput.schema';
import { DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema } from './DiceRollEntryCreateOrConnectWithoutLogInput.schema';
import { DiceRollEntryUpsertWithWhereUniqueWithoutLogInputObjectSchema } from './DiceRollEntryUpsertWithWhereUniqueWithoutLogInput.schema';
import { DiceRollEntryCreateManyLogInputEnvelopeObjectSchema } from './DiceRollEntryCreateManyLogInputEnvelope.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './DiceRollEntryWhereUniqueInput.schema';
import { DiceRollEntryUpdateWithWhereUniqueWithoutLogInputObjectSchema } from './DiceRollEntryUpdateWithWhereUniqueWithoutLogInput.schema';
import { DiceRollEntryUpdateManyWithWhereWithoutLogInputObjectSchema } from './DiceRollEntryUpdateManyWithWhereWithoutLogInput.schema';
import { DiceRollEntryScalarWhereInputObjectSchema } from './DiceRollEntryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema).array(), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DiceRollEntryUpsertWithWhereUniqueWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUpsertWithWhereUniqueWithoutLogInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollEntryCreateManyLogInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema), z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema), z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema), z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema), z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DiceRollEntryUpdateWithWhereUniqueWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUpdateWithWhereUniqueWithoutLogInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DiceRollEntryUpdateManyWithWhereWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUpdateManyWithWhereWithoutLogInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema), z.lazy(() => DiceRollEntryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollEntryUncheckedUpdateManyWithoutLogNestedInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUncheckedUpdateManyWithoutLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUncheckedUpdateManyWithoutLogNestedInput>;
export const DiceRollEntryUncheckedUpdateManyWithoutLogNestedInputObjectZodSchema = makeSchema();
