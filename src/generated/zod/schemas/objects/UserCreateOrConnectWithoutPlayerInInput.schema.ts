import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPlayerInInputObjectSchema } from './UserCreateWithoutPlayerInInput.schema';
import { UserUncheckedCreateWithoutPlayerInInputObjectSchema } from './UserUncheckedCreateWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPlayerInInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPlayerInInput>;
export const UserCreateOrConnectWithoutPlayerInInputObjectZodSchema = makeSchema();
