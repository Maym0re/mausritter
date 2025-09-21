import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPlayerInInputObjectSchema } from './UserCreateWithoutPlayerInInput.schema';
import { UserUncheckedCreateWithoutPlayerInInputObjectSchema } from './UserUncheckedCreateWithoutPlayerInInput.schema';
import { UserCreateOrConnectWithoutPlayerInInputObjectSchema } from './UserCreateOrConnectWithoutPlayerInInput.schema';
import { UserUpsertWithoutPlayerInInputObjectSchema } from './UserUpsertWithoutPlayerInInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPlayerInInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPlayerInInput.schema';
import { UserUpdateWithoutPlayerInInputObjectSchema } from './UserUpdateWithoutPlayerInInput.schema';
import { UserUncheckedUpdateWithoutPlayerInInputObjectSchema } from './UserUncheckedUpdateWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPlayerInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlayerInInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPlayerInInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPlayerInInputObjectSchema), z.lazy(() => UserUpdateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPlayerInInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPlayerInNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlayerInNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlayerInNestedInput>;
export const UserUpdateOneRequiredWithoutPlayerInNestedInputObjectZodSchema = makeSchema();
