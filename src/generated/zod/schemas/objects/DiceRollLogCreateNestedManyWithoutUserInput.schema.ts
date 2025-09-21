import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutUserInputObjectSchema } from './DiceRollLogCreateWithoutUserInput.schema';
import { DiceRollLogUncheckedCreateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutUserInput.schema';
import { DiceRollLogCreateOrConnectWithoutUserInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutUserInput.schema';
import { DiceRollLogCreateManyUserInputEnvelopeObjectSchema } from './DiceRollLogCreateManyUserInputEnvelope.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollLogCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateNestedManyWithoutUserInput>;
export const DiceRollLogCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
