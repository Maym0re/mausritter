import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDiceRollLogsInputObjectSchema as UserUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUpdateWithoutDiceRollLogsInput.schema';
import { UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema as UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedUpdateWithoutDiceRollLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDiceRollLogsInput>;
export const UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
