import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './BirthsignWhereUniqueInput.schema';
import { BirthsignCreateWithoutCharactersInputObjectSchema as BirthsignCreateWithoutCharactersInputObjectSchema } from './BirthsignCreateWithoutCharactersInput.schema';
import { BirthsignUncheckedCreateWithoutCharactersInputObjectSchema as BirthsignUncheckedCreateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BirthsignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BirthsignCreateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const BirthsignCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BirthsignCreateOrConnectWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCreateOrConnectWithoutCharactersInput>;
export const BirthsignCreateOrConnectWithoutCharactersInputObjectZodSchema = makeSchema();
