import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutUserInputObjectSchema as DiceRollLogCreateWithoutUserInputObjectSchema } from './DiceRollLogCreateWithoutUserInput.schema';
import { DiceRollLogUncheckedCreateWithoutUserInputObjectSchema as DiceRollLogUncheckedCreateWithoutUserInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutUserInput.schema';
import { DiceRollLogCreateOrConnectWithoutUserInputObjectSchema as DiceRollLogCreateOrConnectWithoutUserInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutUserInput.schema';
import { DiceRollLogCreateManyUserInputEnvelopeObjectSchema as DiceRollLogCreateManyUserInputEnvelopeObjectSchema } from './DiceRollLogCreateManyUserInputEnvelope.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DiceRollLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollLogUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedCreateNestedManyWithoutUserInput>;
export const DiceRollLogUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
