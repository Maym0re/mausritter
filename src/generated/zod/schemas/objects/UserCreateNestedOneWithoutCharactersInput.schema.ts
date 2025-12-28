import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCharactersInputObjectSchema as UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema as UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema';
import { UserCreateOrConnectWithoutCharactersInputObjectSchema as UserCreateOrConnectWithoutCharactersInputObjectSchema } from './UserCreateOrConnectWithoutCharactersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCharactersInput>;
export const UserCreateNestedOneWithoutCharactersInputObjectZodSchema = makeSchema();
