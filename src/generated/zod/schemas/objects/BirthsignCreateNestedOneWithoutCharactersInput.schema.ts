import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignCreateWithoutCharactersInputObjectSchema as BirthsignCreateWithoutCharactersInputObjectSchema } from './BirthsignCreateWithoutCharactersInput.schema';
import { BirthsignUncheckedCreateWithoutCharactersInputObjectSchema as BirthsignUncheckedCreateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedCreateWithoutCharactersInput.schema';
import { BirthsignCreateOrConnectWithoutCharactersInputObjectSchema as BirthsignCreateOrConnectWithoutCharactersInputObjectSchema } from './BirthsignCreateOrConnectWithoutCharactersInput.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './BirthsignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BirthsignCreateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BirthsignCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => BirthsignWhereUniqueInputObjectSchema).optional()
}).strict();
export const BirthsignCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BirthsignCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignCreateNestedOneWithoutCharactersInput>;
export const BirthsignCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
