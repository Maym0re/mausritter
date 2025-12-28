import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundUpdateWithoutCharactersInputObjectSchema as BackgroundUpdateWithoutCharactersInputObjectSchema } from './BackgroundUpdateWithoutCharactersInput.schema';
import { BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema as BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedUpdateWithoutCharactersInput.schema';
import { BackgroundCreateWithoutCharactersInputObjectSchema as BackgroundCreateWithoutCharactersInputObjectSchema } from './BackgroundCreateWithoutCharactersInput.schema';
import { BackgroundUncheckedCreateWithoutCharactersInputObjectSchema as BackgroundUncheckedCreateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedCreateWithoutCharactersInput.schema';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './BackgroundWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BackgroundUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => BackgroundCreateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => BackgroundWhereInputObjectSchema).optional()
}).strict();
export const BackgroundUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUpsertWithoutCharactersInput>;
export const BackgroundUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
