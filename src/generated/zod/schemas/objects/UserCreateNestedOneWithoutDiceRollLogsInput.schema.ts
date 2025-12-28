import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutDiceRollLogsInputObjectSchema as UserCreateWithoutDiceRollLogsInputObjectSchema } from './UserCreateWithoutDiceRollLogsInput.schema';
import { UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema as UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedCreateWithoutDiceRollLogsInput.schema';
import { UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema as UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema } from './UserCreateOrConnectWithoutDiceRollLogsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDiceRollLogsInput>;
export const UserCreateNestedOneWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
