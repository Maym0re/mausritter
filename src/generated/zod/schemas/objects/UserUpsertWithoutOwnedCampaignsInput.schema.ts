import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutOwnedCampaignsInputObjectSchema as UserUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUpdateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema as UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedCampaignsInput.schema';
import { UserCreateWithoutOwnedCampaignsInputObjectSchema as UserCreateWithoutOwnedCampaignsInputObjectSchema } from './UserCreateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema as UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedCampaignsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOwnedCampaignsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedCampaignsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOwnedCampaignsInput>;
export const UserUpsertWithoutOwnedCampaignsInputObjectZodSchema = makeSchema();
