import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './BackgroundWhereInput.schema';
import { BackgroundUpdateWithoutCharactersInputObjectSchema as BackgroundUpdateWithoutCharactersInputObjectSchema } from './BackgroundUpdateWithoutCharactersInput.schema';
import { BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema as BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BackgroundWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BackgroundUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundUpdateToOneWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUpdateToOneWithWhereWithoutCharactersInput>;
export const BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
