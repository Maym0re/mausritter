import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema';
import { CoatCreateOrConnectWithoutCharactersInputObjectSchema } from './CoatCreateOrConnectWithoutCharactersInput.schema';
import { CoatUpsertWithoutCharactersInputObjectSchema } from './CoatUpsertWithoutCharactersInput.schema';
import { CoatWhereUniqueInputObjectSchema } from './CoatWhereUniqueInput.schema';
import { CoatUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './CoatUpdateToOneWithWhereWithoutCharactersInput.schema';
import { CoatUpdateWithoutCharactersInputObjectSchema } from './CoatUpdateWithoutCharactersInput.schema';
import { CoatUncheckedUpdateWithoutCharactersInputObjectSchema } from './CoatUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoatCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => CoatUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CoatWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CoatUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => CoatUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const CoatUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.CoatUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUpdateOneRequiredWithoutCharactersNestedInput>;
export const CoatUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
