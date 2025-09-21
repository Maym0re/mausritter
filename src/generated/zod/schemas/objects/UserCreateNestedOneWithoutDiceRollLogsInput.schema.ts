import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutDiceRollLogsInputObjectSchema } from './UserCreateWithoutDiceRollLogsInput.schema';
import { UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedCreateWithoutDiceRollLogsInput.schema';
import { UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema } from './UserCreateOrConnectWithoutDiceRollLogsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDiceRollLogsInput>;
export const UserCreateNestedOneWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
