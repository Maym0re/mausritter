import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOwnedCampaignsInputObjectSchema as UserCreateWithoutOwnedCampaignsInputObjectSchema } from './UserCreateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema as UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedCampaignsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedCampaignsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedCampaignsInput>;
export const UserCreateOrConnectWithoutOwnedCampaignsInputObjectZodSchema = makeSchema();
