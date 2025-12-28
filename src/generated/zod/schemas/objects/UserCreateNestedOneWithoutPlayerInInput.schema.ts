import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPlayerInInputObjectSchema as UserCreateWithoutPlayerInInputObjectSchema } from './UserCreateWithoutPlayerInInput.schema';
import { UserUncheckedCreateWithoutPlayerInInputObjectSchema as UserUncheckedCreateWithoutPlayerInInputObjectSchema } from './UserUncheckedCreateWithoutPlayerInInput.schema';
import { UserCreateOrConnectWithoutPlayerInInputObjectSchema as UserCreateOrConnectWithoutPlayerInInputObjectSchema } from './UserCreateOrConnectWithoutPlayerInInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPlayerInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlayerInInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPlayerInInput>;
export const UserCreateNestedOneWithoutPlayerInInputObjectZodSchema = makeSchema();
