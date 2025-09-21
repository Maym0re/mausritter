import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUpdateWithoutOwnedCampaignsInput.schema';
import { UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedCampaignsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOwnedCampaignsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedCampaignsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOwnedCampaignsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedCampaignsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedCampaignsInput>;
export const UserUpdateToOneWithWhereWithoutOwnedCampaignsInputObjectZodSchema = makeSchema();
