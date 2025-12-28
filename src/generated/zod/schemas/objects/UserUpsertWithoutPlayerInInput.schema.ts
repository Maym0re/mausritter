import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutPlayerInInputObjectSchema as UserUpdateWithoutPlayerInInputObjectSchema } from './UserUpdateWithoutPlayerInInput.schema';
import { UserUncheckedUpdateWithoutPlayerInInputObjectSchema as UserUncheckedUpdateWithoutPlayerInInputObjectSchema } from './UserUncheckedUpdateWithoutPlayerInInput.schema';
import { UserCreateWithoutPlayerInInputObjectSchema as UserCreateWithoutPlayerInInputObjectSchema } from './UserCreateWithoutPlayerInInput.schema';
import { UserUncheckedCreateWithoutPlayerInInputObjectSchema as UserUncheckedCreateWithoutPlayerInInputObjectSchema } from './UserUncheckedCreateWithoutPlayerInInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPlayerInInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPlayerInInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPlayerInInput>;
export const UserUpsertWithoutPlayerInInputObjectZodSchema = makeSchema();
