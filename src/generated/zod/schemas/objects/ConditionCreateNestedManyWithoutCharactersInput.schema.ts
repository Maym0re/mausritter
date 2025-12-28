import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionCreateWithoutCharactersInputObjectSchema as ConditionCreateWithoutCharactersInputObjectSchema } from './ConditionCreateWithoutCharactersInput.schema';
import { ConditionUncheckedCreateWithoutCharactersInputObjectSchema as ConditionUncheckedCreateWithoutCharactersInputObjectSchema } from './ConditionUncheckedCreateWithoutCharactersInput.schema';
import { ConditionCreateOrConnectWithoutCharactersInputObjectSchema as ConditionCreateOrConnectWithoutCharactersInputObjectSchema } from './ConditionCreateOrConnectWithoutCharactersInput.schema';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './ConditionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema).array(), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConditionCreateOrConnectWithoutCharactersInputObjectSchema), z.lazy(() => ConditionCreateOrConnectWithoutCharactersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConditionWhereUniqueInputObjectSchema), z.lazy(() => ConditionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConditionCreateNestedManyWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionCreateNestedManyWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionCreateNestedManyWithoutCharactersInput>;
export const ConditionCreateNestedManyWithoutCharactersInputObjectZodSchema = makeSchema();
