import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUpdateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedCampaignsInput.schema';
import { UserCreateWithoutOwnedCampaignsInputObjectSchema } from './UserCreateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedCampaignsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOwnedCampaignsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedCampaignsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOwnedCampaignsInput>;
export const UserUpsertWithoutOwnedCampaignsInputObjectZodSchema = makeSchema();
