import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutCharactersInputObjectSchema } from './UserUpdateWithoutCharactersInput.schema';
import { UserUncheckedUpdateWithoutCharactersInputObjectSchema } from './UserUncheckedUpdateWithoutCharactersInput.schema';
import { UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutCharactersInput>;
export const UserUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
