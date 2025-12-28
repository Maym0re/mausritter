import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollEntryCreateWithoutLogInputObjectSchema as DiceRollEntryCreateWithoutLogInputObjectSchema } from './DiceRollEntryCreateWithoutLogInput.schema';
import { DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema as DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema } from './DiceRollEntryUncheckedCreateWithoutLogInput.schema';
import { DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema as DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema } from './DiceRollEntryCreateOrConnectWithoutLogInput.schema';
import { DiceRollEntryCreateManyLogInputEnvelopeObjectSchema as DiceRollEntryCreateManyLogInputEnvelopeObjectSchema } from './DiceRollEntryCreateManyLogInputEnvelope.schema';
import { DiceRollEntryWhereUniqueInputObjectSchema as DiceRollEntryWhereUniqueInputObjectSchema } from './DiceRollEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateWithoutLogInputObjectSchema).array(), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryUncheckedCreateWithoutLogInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema), z.lazy(() => DiceRollEntryCreateOrConnectWithoutLogInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollEntryCreateManyLogInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema), z.lazy(() => DiceRollEntryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectSchema: z.ZodType<Prisma.DiceRollEntryUncheckedCreateNestedManyWithoutLogInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollEntryUncheckedCreateNestedManyWithoutLogInput>;
export const DiceRollEntryUncheckedCreateNestedManyWithoutLogInputObjectZodSchema = makeSchema();
