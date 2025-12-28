import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatUpdateWithoutCharactersInputObjectSchema as CoatUpdateWithoutCharactersInputObjectSchema } from './CoatUpdateWithoutCharactersInput.schema';
import { CoatUncheckedUpdateWithoutCharactersInputObjectSchema as CoatUncheckedUpdateWithoutCharactersInputObjectSchema } from './CoatUncheckedUpdateWithoutCharactersInput.schema';
import { CoatCreateWithoutCharactersInputObjectSchema as CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema as CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './CoatWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CoatUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => CoatWhereInputObjectSchema).optional()
}).strict();
export const CoatUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUpsertWithoutCharactersInput>;
export const CoatUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
