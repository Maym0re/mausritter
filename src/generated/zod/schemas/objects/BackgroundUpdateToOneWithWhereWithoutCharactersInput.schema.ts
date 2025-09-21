import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundWhereInputObjectSchema } from './BackgroundWhereInput.schema';
import { BackgroundUpdateWithoutCharactersInputObjectSchema } from './BackgroundUpdateWithoutCharactersInput.schema';
import { BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BackgroundWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BackgroundUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundUpdateToOneWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUpdateToOneWithWhereWithoutCharactersInput>;
export const BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
