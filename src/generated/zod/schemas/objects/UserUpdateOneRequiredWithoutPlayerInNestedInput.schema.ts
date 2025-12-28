import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPlayerInInputObjectSchema as UserCreateWithoutPlayerInInputObjectSchema } from './UserCreateWithoutPlayerInInput.schema';
import { UserUncheckedCreateWithoutPlayerInInputObjectSchema as UserUncheckedCreateWithoutPlayerInInputObjectSchema } from './UserUncheckedCreateWithoutPlayerInInput.schema';
import { UserCreateOrConnectWithoutPlayerInInputObjectSchema as UserCreateOrConnectWithoutPlayerInInputObjectSchema } from './UserCreateOrConnectWithoutPlayerInInput.schema';
import { UserUpsertWithoutPlayerInInputObjectSchema as UserUpsertWithoutPlayerInInputObjectSchema } from './UserUpsertWithoutPlayerInInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPlayerInInputObjectSchema as UserUpdateToOneWithWhereWithoutPlayerInInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPlayerInInput.schema';
import { UserUpdateWithoutPlayerInInputObjectSchema as UserUpdateWithoutPlayerInInputObjectSchema } from './UserUpdateWithoutPlayerInInput.schema';
import { UserUncheckedUpdateWithoutPlayerInInputObjectSchema as UserUncheckedUpdateWithoutPlayerInInputObjectSchema } from './UserUncheckedUpdateWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPlayerInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlayerInInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPlayerInInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPlayerInInputObjectSchema), z.lazy(() => UserUpdateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPlayerInInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPlayerInNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlayerInNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlayerInNestedInput>;
export const UserUpdateOneRequiredWithoutPlayerInNestedInputObjectZodSchema = makeSchema();
