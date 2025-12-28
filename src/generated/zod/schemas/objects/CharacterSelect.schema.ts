import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CampaignArgsObjectSchema as CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { BackgroundArgsObjectSchema as BackgroundArgsObjectSchema } from './BackgroundArgs.schema';
import { BirthsignArgsObjectSchema as BirthsignArgsObjectSchema } from './BirthsignArgs.schema';
import { CoatArgsObjectSchema as CoatArgsObjectSchema } from './CoatArgs.schema';
import { InventoryItemFindManySchema as InventoryItemFindManySchema } from '../findManyInventoryItem.schema';
import { ConditionFindManySchema as ConditionFindManySchema } from '../findManyCondition.schema';
import { CharacterCountOutputTypeArgsObjectSchema as CharacterCountOutputTypeArgsObjectSchema } from './CharacterCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  notes: z.boolean().optional(),
  playerId: z.boolean().optional(),
  player: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  campaignId: z.boolean().optional(),
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  str: z.boolean().optional(),
  dex: z.boolean().optional(),
  wil: z.boolean().optional(),
  hp: z.boolean().optional(),
  maxHp: z.boolean().optional(),
  backgroundId: z.boolean().optional(),
  birthsignId: z.boolean().optional(),
  coatId: z.boolean().optional(),
  background: z.union([z.boolean(), z.lazy(() => BackgroundArgsObjectSchema)]).optional(),
  birthsign: z.union([z.boolean(), z.lazy(() => BirthsignArgsObjectSchema)]).optional(),
  coat: z.union([z.boolean(), z.lazy(() => CoatArgsObjectSchema)]).optional(),
  physicalDetail: z.boolean().optional(),
  level: z.boolean().optional(),
  xp: z.boolean().optional(),
  grit: z.boolean().optional(),
  pips: z.boolean().optional(),
  inventory: z.union([z.boolean(), z.lazy(() => InventoryItemFindManySchema)]).optional(),
  conditions: z.union([z.boolean(), z.lazy(() => ConditionFindManySchema)]).optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CharacterSelectObjectSchema: z.ZodType<Prisma.CharacterSelect> = makeSchema() as unknown as z.ZodType<Prisma.CharacterSelect>;
export const CharacterSelectObjectZodSchema = makeSchema();
