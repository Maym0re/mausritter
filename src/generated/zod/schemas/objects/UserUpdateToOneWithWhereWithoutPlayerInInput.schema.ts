import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPlayerInInputObjectSchema as UserUpdateWithoutPlayerInInputObjectSchema } from './UserUpdateWithoutPlayerInInput.schema';
import { UserUncheckedUpdateWithoutPlayerInInputObjectSchema as UserUncheckedUpdateWithoutPlayerInInputObjectSchema } from './UserUncheckedUpdateWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPlayerInInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPlayerInInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPlayerInInput>;
export const UserUpdateToOneWithWhereWithoutPlayerInInputObjectZodSchema = makeSchema();
