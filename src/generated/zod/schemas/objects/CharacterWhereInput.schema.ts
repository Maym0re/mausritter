import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CampaignScalarRelationFilterObjectSchema as CampaignScalarRelationFilterObjectSchema } from './CampaignScalarRelationFilter.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { BackgroundScalarRelationFilterObjectSchema as BackgroundScalarRelationFilterObjectSchema } from './BackgroundScalarRelationFilter.schema';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './BackgroundWhereInput.schema';
import { BirthsignScalarRelationFilterObjectSchema as BirthsignScalarRelationFilterObjectSchema } from './BirthsignScalarRelationFilter.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './BirthsignWhereInput.schema';
import { CoatScalarRelationFilterObjectSchema as CoatScalarRelationFilterObjectSchema } from './CoatScalarRelationFilter.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './CoatWhereInput.schema';
import { InventoryItemListRelationFilterObjectSchema as InventoryItemListRelationFilterObjectSchema } from './InventoryItemListRelationFilter.schema';
import { ConditionListRelationFilterObjectSchema as ConditionListRelationFilterObjectSchema } from './ConditionListRelationFilter.schema'

const characterwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CharacterWhereInputObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterWhereInputObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  playerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  str: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  dex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  wil: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxHp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  backgroundId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  birthsignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  coatId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  physicalDetail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  xp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grit: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pips: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  player: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  campaign: z.union([z.lazy(() => CampaignScalarRelationFilterObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema)]).optional(),
  background: z.union([z.lazy(() => BackgroundScalarRelationFilterObjectSchema), z.lazy(() => BackgroundWhereInputObjectSchema)]).optional(),
  birthsign: z.union([z.lazy(() => BirthsignScalarRelationFilterObjectSchema), z.lazy(() => BirthsignWhereInputObjectSchema)]).optional(),
  coat: z.union([z.lazy(() => CoatScalarRelationFilterObjectSchema), z.lazy(() => CoatWhereInputObjectSchema)]).optional(),
  inventory: z.lazy(() => InventoryItemListRelationFilterObjectSchema).optional(),
  conditions: z.lazy(() => ConditionListRelationFilterObjectSchema).optional()
}).strict();
export const CharacterWhereInputObjectSchema: z.ZodType<Prisma.CharacterWhereInput> = characterwhereinputSchema as unknown as z.ZodType<Prisma.CharacterWhereInput>;
export const CharacterWhereInputObjectZodSchema = characterwhereinputSchema;
