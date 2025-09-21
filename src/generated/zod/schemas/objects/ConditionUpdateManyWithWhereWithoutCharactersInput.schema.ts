import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConditionScalarWhereInputObjectSchema } from './ConditionScalarWhereInput.schema';
import { ConditionUpdateManyMutationInputObjectSchema } from './ConditionUpdateManyMutationInput.schema';
import { ConditionUncheckedUpdateManyWithoutCharactersInputObjectSchema } from './ConditionUncheckedUpdateManyWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConditionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConditionUpdateManyMutationInputObjectSchema), z.lazy(() => ConditionUncheckedUpdateManyWithoutCharactersInputObjectSchema)])
}).strict();
export const ConditionUpdateManyWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.ConditionUpdateManyWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.ConditionUpdateManyWithWhereWithoutCharactersInput>;
export const ConditionUpdateManyWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
