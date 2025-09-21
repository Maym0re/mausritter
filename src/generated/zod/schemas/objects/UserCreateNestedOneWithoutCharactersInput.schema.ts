import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema';
import { UserCreateOrConnectWithoutCharactersInputObjectSchema } from './UserCreateOrConnectWithoutCharactersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCharactersInput>;
export const UserCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
