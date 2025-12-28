import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './BackgroundWhereUniqueInput.schema';
import { BackgroundCreateWithoutCharactersInputObjectSchema as BackgroundCreateWithoutCharactersInputObjectSchema } from './BackgroundCreateWithoutCharactersInput.schema';
import { BackgroundUncheckedCreateWithoutCharactersInputObjectSchema as BackgroundUncheckedCreateWithoutCharactersInputObjectSchema } from './BackgroundUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BackgroundWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BackgroundCreateWithoutCharactersInputObjectSchema), z.lazy(() => BackgroundUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const BackgroundCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.BackgroundCreateOrConnectWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCreateOrConnectWithoutCharactersInput>;
export const BackgroundCreateOrConnectWithoutCharactersInputObjectZodSchema = makeSchema();
