import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPlayerInInputObjectSchema as UserCreateWithoutPlayerInInputObjectSchema } from './UserCreateWithoutPlayerInInput.schema';
import { UserUncheckedCreateWithoutPlayerInInputObjectSchema as UserUncheckedCreateWithoutPlayerInInputObjectSchema } from './UserUncheckedCreateWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPlayerInInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPlayerInInput>;
export const UserCreateOrConnectWithoutPlayerInInputObjectZodSchema = makeSchema();
