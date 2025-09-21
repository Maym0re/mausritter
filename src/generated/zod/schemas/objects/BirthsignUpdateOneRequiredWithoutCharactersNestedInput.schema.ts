import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BirthsignCreateWithoutCharactersInputObjectSchema } from './BirthsignCreateWithoutCharactersInput.schema';
import { BirthsignUncheckedCreateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedCreateWithoutCharactersInput.schema';
import { BirthsignCreateOrConnectWithoutCharactersInputObjectSchema } from './BirthsignCreateOrConnectWithoutCharactersInput.schema';
import { BirthsignUpsertWithoutCharactersInputObjectSchema } from './BirthsignUpsertWithoutCharactersInput.schema';
import { BirthsignWhereUniqueInputObjectSchema } from './BirthsignWhereUniqueInput.schema';
import { BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './BirthsignUpdateToOneWithWhereWithoutCharactersInput.schema';
import { BirthsignUpdateWithoutCharactersInputObjectSchema } from './BirthsignUpdateWithoutCharactersInput.schema';
import { BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema } from './BirthsignUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BirthsignCreateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BirthsignCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => BirthsignUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => BirthsignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BirthsignUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BirthsignUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const BirthsignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.BirthsignUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BirthsignUpdateOneRequiredWithoutCharactersNestedInput>;
export const BirthsignUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
