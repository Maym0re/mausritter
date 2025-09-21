import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCharactersInputObjectSchema } from './UserUpdateWithoutCharactersInput.schema';
import { UserUncheckedUpdateWithoutCharactersInputObjectSchema } from './UserUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCharactersInput>;
export const UserUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
