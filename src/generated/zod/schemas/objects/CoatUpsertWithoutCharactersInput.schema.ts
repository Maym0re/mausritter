import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatUpdateWithoutCharactersInputObjectSchema } from './CoatUpdateWithoutCharactersInput.schema';
import { CoatUncheckedUpdateWithoutCharactersInputObjectSchema } from './CoatUncheckedUpdateWithoutCharactersInput.schema';
import { CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema';
import { CoatWhereInputObjectSchema } from './CoatWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CoatUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => CoatWhereInputObjectSchema).optional()
}).strict();
export const CoatUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUpsertWithoutCharactersInput>;
export const CoatUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
