import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutDiceRollLogsInputObjectSchema } from './UserCreateWithoutDiceRollLogsInput.schema';
import { UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedCreateWithoutDiceRollLogsInput.schema';
import { UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema } from './UserCreateOrConnectWithoutDiceRollLogsInput.schema';
import { UserUpsertWithoutDiceRollLogsInputObjectSchema } from './UserUpsertWithoutDiceRollLogsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDiceRollLogsInput.schema';
import { UserUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUpdateWithoutDiceRollLogsInput.schema';
import { UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedUpdateWithoutDiceRollLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDiceRollLogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUpdateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDiceRollLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDiceRollLogsNestedInput>;
export const UserUpdateOneRequiredWithoutDiceRollLogsNestedInputObjectZodSchema = makeSchema();
