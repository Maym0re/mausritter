import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionWhereUniqueInputObjectSchema as ConditionWhereUniqueInputObjectSchema } from './ConditionWhereUniqueInput.schema';
import { ConditionUpdateWithoutCharactersInputObjectSchema as ConditionUpdateWithoutCharactersInputObjectSchema } from './ConditionUpdateWithoutCharactersInput.schema';
import { ConditionUncheckedUpdateWithoutCharactersInputObjectSchema as ConditionUncheckedUpdateWithoutCharactersInputObjectSchema } from './ConditionUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConditionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConditionUpdateWithoutCharactersInputObjectSchema), z.lazy(() => ConditionUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const ConditionUpdateWithWhereUniqueWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionUpdateWithWhereUniqueWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUpdateWithWhereUniqueWithoutCharactersInput>;
export const ConditionUpdateWithWhereUniqueWithoutCharactersInputObjectZodSchema = makeSchema();
