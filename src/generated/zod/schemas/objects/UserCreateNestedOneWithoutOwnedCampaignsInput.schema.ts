import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutOwnedCampaignsInputObjectSchema as UserCreateWithoutOwnedCampaignsInputObjectSchema } from './UserCreateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema as UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedCampaignsInput.schema';
import { UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema as UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema } from './UserCreateOrConnectWithoutOwnedCampaignsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOwnedCampaignsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedCampaignsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedCampaignsInput>;
export const UserCreateNestedOneWithoutOwnedCampaignsInputObjectZodSchema = makeSchema();
