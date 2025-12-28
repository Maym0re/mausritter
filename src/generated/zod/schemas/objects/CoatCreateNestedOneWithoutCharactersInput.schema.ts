import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoatCreateWithoutCharactersInputObjectSchema as CoatCreateWithoutCharactersInputObjectSchema } from './CoatCreateWithoutCharactersInput.schema';
import { CoatUncheckedCreateWithoutCharactersInputObjectSchema as CoatUncheckedCreateWithoutCharactersInputObjectSchema } from './CoatUncheckedCreateWithoutCharactersInput.schema';
import { CoatCreateOrConnectWithoutCharactersInputObjectSchema as CoatCreateOrConnectWithoutCharactersInputObjectSchema } from './CoatCreateOrConnectWithoutCharactersInput.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './CoatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoatCreateWithoutCharactersInputObjectSchema), z.lazy(() => CoatUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoatCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CoatWhereUniqueInputObjectSchema).optional()
}).strict();
export const CoatCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CoatCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatCreateNestedOneWithoutCharactersInput>;
export const CoatCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
