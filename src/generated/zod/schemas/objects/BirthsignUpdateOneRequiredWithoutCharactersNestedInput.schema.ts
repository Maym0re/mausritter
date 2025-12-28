import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignCreateWithoutCharactersInputObjectSchema as BirthsignCreateWithoutCharactersInputObjectSchema } from './BirthsignCreateWithoutCharactersInput.schema';
import { BirthsignUncheckedCreateWithoutCharactersInputObjectSchema as BirthsignUncheckedCreateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedCreateWithoutCharactersInput.schema';
import { BirthsignCreateOrConnectWithoutCharactersInputObjectSchema as BirthsignCreateOrConnectWithoutCharactersInputObjectSchema } from './BirthsignCreateOrConnectWithoutCharactersInput.schema';
import { BirthsignUpsertWithoutCharactersInputObjectSchema as BirthsignUpsertWithoutCharactersInputObjectSchema } from './BirthsignUpsertWithoutCharactersInput.schema';
import { BirthsignWhereUniqueInputObjectSchema as BirthsignWhereUniqueInputObjectSchema } from './BirthsignWhereUniqueInput.schema';
import { BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectSchema as BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './BirthsignUpdateToOneWithWhereWithoutCharactersInput.schema';
import { BirthsignUpdateWithoutCharactersInputObjectSchema as BirthsignUpdateWithoutCharactersInputObjectSchema } from './BirthsignUpdateWithoutCharactersInput.schema';
import { BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema as BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BirthsignCreateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BirthsignCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => BirthsignUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => BirthsignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const BirthsignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.BirthsignUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignUpdateOneRequiredWithoutCharactersNestedInput>;
export const BirthsignUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
