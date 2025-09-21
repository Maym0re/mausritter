import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatWhereInputObjectSchema } from './CoatWhereInput.schema';
import { CoatUpdateWithoutCharactersInputObjectSchema } from './CoatUpdateWithoutCharactersInput.schema';
import { CoatUncheckedUpdateWithoutCharactersInputObjectSchema } from './CoatUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoatWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CoatUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const CoatUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatUpdateToOneWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUpdateToOneWithWhereWithoutCharactersInput>;
export const CoatUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
