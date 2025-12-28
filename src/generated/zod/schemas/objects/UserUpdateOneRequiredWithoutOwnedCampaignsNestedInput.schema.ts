import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutOwnedCampaignsInputObjectSchema as UserCreateWithoutOwnedCampaignsInputObjectSchema } from './UserCreateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema as UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedCampaignsInput.schema';
import { UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema as UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema } from './UserCreateOrConnectWithoutOwnedCampaignsInput.schema';
import { UserUpsertWithoutOwnedCampaignsInputObjectSchema as UserUpsertWithoutOwnedCampaignsInputObjectSchema } from './UserUpsertWithoutOwnedCampaignsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOwnedCampaignsInputObjectSchema as UserUpdateToOneWithWhereWithoutOwnedCampaignsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOwnedCampaignsInput.schema';
import { UserUpdateWithoutOwnedCampaignsInputObjectSchema as UserUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUpdateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema as UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedCampaignsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedCampaignsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOwnedCampaignsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUpdateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutOwnedCampaignsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedCampaignsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedCampaignsNestedInput>;
export const UserUpdateOneRequiredWithoutOwnedCampaignsNestedInputObjectZodSchema = makeSchema();
