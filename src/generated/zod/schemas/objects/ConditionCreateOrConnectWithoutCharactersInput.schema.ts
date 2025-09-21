import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInputObjectSchema } from './ConditionWhereUniqueInput.schema';
import { ConditionCreateWithoutCharactersInputObjectSchema } from './ConditionCreateWithoutCharactersInput.schema';
import { ConditionUncheckedCreateWithoutCharactersInputObjectSchema } from './ConditionUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConditionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const ConditionCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionCreateOrConnectWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCreateOrConnectWithoutCharactersInput>;
export const ConditionCreateOrConnectWithoutCharactersInputObjectZodSchema = makeSchema();
