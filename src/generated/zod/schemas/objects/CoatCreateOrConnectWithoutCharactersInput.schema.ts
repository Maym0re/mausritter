import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatWhereUniqueInputObjectSchema } from './CoatWhereUniqueInput.schema';
import { CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const CoatCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatCreateOrConnectWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatCreateOrConnectWithoutCharactersInput>;
export const CoatCreateOrConnectWithoutCharactersInputObjectZodSchema = makeSchema();
