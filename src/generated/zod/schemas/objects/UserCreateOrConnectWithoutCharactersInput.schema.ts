import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCharactersInput>;
export const UserCreateOrConnectWithoutCharactersInputObjectZodSchema = makeSchema();
