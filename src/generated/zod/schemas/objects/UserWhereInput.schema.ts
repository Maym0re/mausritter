import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { CampaignListRelationFilterObjectSchema } from './CampaignListRelationFilter.schema';
import { CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema';
import { CampaignPlayerListRelationFilterObjectSchema } from './CampaignPlayerListRelationFilter.schema';
import { DiceRollLogListRelationFilterObjectSchema } from './DiceRollLogListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignListRelationFilterObjectSchema).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerListRelationFilterObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
