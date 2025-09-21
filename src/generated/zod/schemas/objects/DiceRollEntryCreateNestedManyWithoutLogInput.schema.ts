import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryCreateWithoutLogInputObjectSchema } from './DiceRollEntryCreateWithoutLogInput.schema';
import { DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateWithoutLogInput.schema';
import { DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema } from './DiceRollEntryCreateOrConnectWithoutLogInput.schema';
import { DiceRollEntryCreateManyLogInputEnvelopeObjectSchema } from './DiceRollEntryCreateManyLogInputEnvelope.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema } from './DiceRollEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema).array(), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollEntryCreateManyLogInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema), z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollEntryCreateNestedManyWithoutLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryCreateNestedManyWithoutLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryCreateNestedManyWithoutLogInput>;
export const DiceRollEntryCreateNestedManyWithoutLogInputObjectZodSchema = makeSchema();
