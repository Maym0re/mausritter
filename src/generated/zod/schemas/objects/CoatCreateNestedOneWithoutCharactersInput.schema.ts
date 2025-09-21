import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema';
import { CoatCreateOrConnectWithoutCharactersInputObjectSchema } from './CoatCreateOrConnectWithoutCharactersInput.schema';
import { CoatWhereUniqueInputObjectSchema } from './CoatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoatCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CoatWhereUniqueInputObjectSchema).optional()
}).strict();
export const CoatCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatCreateNestedOneWithoutCharactersInput>;
export const CoatCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
