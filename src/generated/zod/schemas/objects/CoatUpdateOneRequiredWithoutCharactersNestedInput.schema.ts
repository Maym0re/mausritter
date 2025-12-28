import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatCreateWithoutCharactersInputObjectSchema as CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema as CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema';
import { CoatCreateOrConnectWithoutCharactersInputObjectSchema as CoatCreateOrConnectWithoutCharactersInputObjectSchema } from './CoatCreateOrConnectWithoutCharactersInput.schema';
import { CoatUpsertWithoutCharactersInputObjectSchema as CoatUpsertWithoutCharactersInputObjectSchema } from './CoatUpsertWithoutCharactersInput.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './CoatWhereUniqueInput.schema';
import { CoatUpdateToOneWithWhereWithoutCharactersInputObjectSchema as CoatUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './CoatUpdateToOneWithWhereWithoutCharactersInput.schema';
import { CoatUpdateWithoutCharactersInputObjectSchema as CoatUpdateWithoutCharactersInputObjectSchema } from './CoatUpdateWithoutCharactersInput.schema';
import { CoatUncheckedUpdateWithoutCharactersInputObjectSchema as CoatUncheckedUpdateWithoutCharactersInputObjectSchema } from './CoatUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoatCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => CoatUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CoatWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CoatUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => CoatUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const CoatUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.CoatUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUpdateOneRequiredWithoutCharactersNestedInput>;
export const CoatUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
