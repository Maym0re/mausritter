import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignUpdateWithoutCharactersInputObjectSchema as BirthsignUpdateWithoutCharactersInputObjectSchema } from './BirthsignUpdateWithoutCharactersInput.schema';
import { BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema as BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedUpdateWithoutCharactersInput.schema';
import { BirthsignCreateWithoutCharactersInputObjectSchema as BirthsignCreateWithoutCharactersInputObjectSchema } from './BirthsignCreateWithoutCharactersInput.schema';
import { BirthsignUncheckedCreateWithoutCharactersInputObjectSchema as BirthsignUncheckedCreateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedCreateWithoutCharactersInput.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './BirthsignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BirthsignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => BirthsignCreateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => BirthsignWhereInputObjectSchema).optional()
}).strict();
export const BirthsignUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BirthsignUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignUpsertWithoutCharactersInput>;
export const BirthsignUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
