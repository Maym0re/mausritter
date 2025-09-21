import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUpdateWithoutDiceRollLogsInput.schema';
import { UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedUpdateWithoutDiceRollLogsInput.schema';
import { UserCreateWithoutDiceRollLogsInputObjectSchema } from './UserCreateWithoutDiceRollLogsInput.schema';
import { UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedCreateWithoutDiceRollLogsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDiceRollLogsInput>;
export const UserUpsertWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
