import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCharactersInputObjectSchema as UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema as UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema';
import { UserCreateOrConnectWithoutCharactersInputObjectSchema as UserCreateOrConnectWithoutCharactersInputObjectSchema } from './UserCreateOrConnectWithoutCharactersInput.schema';
import { UserUpsertWithoutCharactersInputObjectSchema as UserUpsertWithoutCharactersInputObjectSchema } from './UserUpsertWithoutCharactersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema as UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCharactersInput.schema';
import { UserUpdateWithoutCharactersInputObjectSchema as UserUpdateWithoutCharactersInputObjectSchema } from './UserUpdateWithoutCharactersInput.schema';
import { UserUncheckedUpdateWithoutCharactersInputObjectSchema as UserUncheckedUpdateWithoutCharactersInputObjectSchema } from './UserUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => UserUpdateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput>;
export const UserUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
