import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundCreateWithoutCharactersInputObjectSchema as BackgroundCreateWithoutCharactersInputObjectSchema } from './BackgroundCreateWithoutCharactersInput.schema';
import { BackgroundUncheckedCreateWithoutCharactersInputObjectSchema as BackgroundUncheckedCreateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedCreateWithoutCharactersInput.schema';
import { BackgroundCreateOrConnectWithoutCharactersInputObjectSchema as BackgroundCreateOrConnectWithoutCharactersInputObjectSchema } from './BackgroundCreateOrConnectWithoutCharactersInput.schema';
import { BackgroundUpsertWithoutCharactersInputObjectSchema as BackgroundUpsertWithoutCharactersInputObjectSchema } from './BackgroundUpsertWithoutCharactersInput.schema';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './BackgroundWhereUniqueInput.schema';
import { BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectSchema as BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './BackgroundUpdateToOneWithWhereWithoutCharactersInput.schema';
import { BackgroundUpdateWithoutCharactersInputObjectSchema as BackgroundUpdateWithoutCharactersInputObjectSchema } from './BackgroundUpdateWithoutCharactersInput.schema';
import { BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema as BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BackgroundCreateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BackgroundCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => BackgroundUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => BackgroundWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BackgroundUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUpdateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const BackgroundUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.BackgroundUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUpdateOneRequiredWithoutCharactersNestedInput>;
export const BackgroundUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
