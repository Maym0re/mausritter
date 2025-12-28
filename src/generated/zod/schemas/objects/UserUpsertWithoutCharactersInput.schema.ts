import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutCharactersInputObjectSchema as UserUpdateWithoutCharactersInputObjectSchema } from './UserUpdateWithoutCharactersInput.schema';
import { UserUncheckedUpdateWithoutCharactersInputObjectSchema as UserUncheckedUpdateWithoutCharactersInputObjectSchema } from './UserUncheckedUpdateWithoutCharactersInput.schema';
import { UserCreateWithoutCharactersInputObjectSchema as UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema as UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutCharactersInput>;
export const UserUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
