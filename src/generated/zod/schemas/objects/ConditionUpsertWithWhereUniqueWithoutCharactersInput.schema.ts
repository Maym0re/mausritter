import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInputObjectSchema } from './ConditionWhereUniqueInput.schema';
import { ConditionUpdateWithoutCharactersInputObjectSchema } from './ConditionUpdateWithoutCharactersInput.schema';
import { ConditionUncheckedUpdateWithoutCharactersInputObjectSchema } from './ConditionUncheckedUpdateWithoutCharactersInput.schema';
import { ConditionCreateWithoutCharactersInputObjectSchema } from './ConditionCreateWithoutCharactersInput.schema';
import { ConditionUncheckedCreateWithoutCharactersInputObjectSchema } from './ConditionUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConditionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConditionUpdateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => ConditionCreateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const ConditionUpsertWithWhereUniqueWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionUpsertWithWhereUniqueWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUpsertWithWhereUniqueWithoutCharactersInput>;
export const ConditionUpsertWithWhereUniqueWithoutCharactersInputObjectZodSchema = makeSchema();
