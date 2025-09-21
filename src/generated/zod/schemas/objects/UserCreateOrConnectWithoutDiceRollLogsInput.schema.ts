import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDiceRollLogsInputObjectSchema } from './UserCreateWithoutDiceRollLogsInput.schema';
import { UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema } from './UserUncheckedCreateWithoutDiceRollLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDiceRollLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDiceRollLogsInput>;
export const UserCreateOrConnectWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
