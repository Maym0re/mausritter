import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundCreateWithoutCharactersInputObjectSchema as BackgroundCreateWithoutCharactersInputObjectSchema } from './BackgroundCreateWithoutCharactersInput.schema';
import { BackgroundUncheckedCreateWithoutCharactersInputObjectSchema as BackgroundUncheckedCreateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedCreateWithoutCharactersInput.schema';
import { BackgroundCreateOrConnectWithoutCharactersInputObjectSchema as BackgroundCreateOrConnectWithoutCharactersInputObjectSchema } from './BackgroundCreateOrConnectWithoutCharactersInput.schema';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './BackgroundWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BackgroundCreateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BackgroundCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => BackgroundWhereUniqueInputObjectSchema).optional()
}).strict();
export const BackgroundCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCreateNestedOneWithoutCharactersInput>;
export const BackgroundCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
