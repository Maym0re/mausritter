import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { CampaignArgsObjectSchema } from './CampaignArgs.schema';
import { BackgroundArgsObjectSchema } from './BackgroundArgs.schema';
import { BirthsignArgsObjectSchema } from './BirthsignArgs.schema';
import { CoatArgsObjectSchema } from './CoatArgs.schema';
import { InventoryItemFindManySchema } from '../findManyInventoryItem.schema';
import { ConditionFindManySchema } from '../findManyCondition.schema';
import { CharacterCountOutputTypeArgsObjectSchema } from './CharacterCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  player: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsObjectSchema)]).optional(),
  background: z.union([z.boolean(), z.lazy(() => BackgroundArgsObjectSchema)]).optional(),
  birthsign: z.union([z.boolean(), z.lazy(() => BirthsignArgsObjectSchema)]).optional(),
  coat: z.union([z.boolean(), z.lazy(() => CoatArgsObjectSchema)]).optional(),
  inventory: z.union([z.boolean(), z.lazy(() => InventoryItemFindManySchema)]).optional(),
  conditions: z.union([z.boolean(), z.lazy(() => ConditionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CharacterIncludeObjectSchema: z.ZodType<Prisma.CharacterInclude> = makeSchema() as unknown as z.ZodType<Prisma.CharacterInclude>;
export const CharacterIncludeObjectZodSchema = makeSchema();
