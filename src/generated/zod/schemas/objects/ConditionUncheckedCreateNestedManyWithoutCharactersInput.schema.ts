import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCreateWithoutCharactersInputObjectSchema } from './ConditionCreateWithoutCharactersInput.schema';
import { ConditionUncheckedCreateWithoutCharactersInputObjectSchema } from './ConditionUncheckedCreateWithoutCharactersInput.schema';
import { ConditionCreateOrConnectWithoutCharactersInputObjectSchema } from './ConditionCreateOrConnectWithoutCharactersInput.schema';
import { ConditionWhereUniqueInputObjectSchema } from './ConditionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema).array(), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConditionCreateOrConnectWithoutCharactersInputObjectSchema), z.lazy(() => ConditionCreateOrConnectWithoutCharactersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConditionWhereUniqueInputObjectSchema), z.lazy(() => ConditionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConditionUncheckedCreateNestedManyWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionUncheckedCreateNestedManyWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUncheckedCreateNestedManyWithoutCharactersInput>;
export const ConditionUncheckedCreateNestedManyWithoutCharactersInputObjectZodSchema = makeSchema();
