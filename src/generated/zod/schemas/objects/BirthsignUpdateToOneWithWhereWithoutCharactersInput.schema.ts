import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignWhereInputObjectSchema } from './BirthsignWhereInput.schema';
import { BirthsignUpdateWithoutCharactersInputObjectSchema } from './BirthsignUpdateWithoutCharactersInput.schema';
import { BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BirthsignWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BirthsignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BirthsignUpdateToOneWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignUpdateToOneWithWhereWithoutCharactersInput>;
export const BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
