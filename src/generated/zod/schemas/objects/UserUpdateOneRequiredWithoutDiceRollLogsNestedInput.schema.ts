import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutDiceRollLogsInputObjectSchema as UserCreateWithoutDiceRollLogsInputObjectSchema } from './UserCreateWithoutDiceRollLogsInput.schema';
import { UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema as UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedCreateWithoutDiceRollLogsInput.schema';
import { UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema as UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema } from './UserCreateOrConnectWithoutDiceRollLogsInput.schema';
import { UserUpsertWithoutDiceRollLogsInputObjectSchema as UserUpsertWithoutDiceRollLogsInputObjectSchema } from './UserUpsertWithoutDiceRollLogsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema as UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDiceRollLogsInput.schema';
import { UserUpdateWithoutDiceRollLogsInputObjectSchema as UserUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUpdateWithoutDiceRollLogsInput.schema';
import { UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema as UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedUpdateWithoutDiceRollLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDiceRollLogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUpdateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDiceRollLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDiceRollLogsNestedInput>;
export const UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectZodSchema = makeSchema();
