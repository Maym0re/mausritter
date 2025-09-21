import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUpdateWithoutDiceRollLogsInput.schema';
import { UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedUpdateWithoutDiceRollLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDiceRollLogsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDiceRollLogsInput>;
export const UserUpdateToOneWithWhereWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
