import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CampaignPlayerOrderByRelationAggregateInputObjectSchema as CampaignPlayerOrderByRelationAggregateInputObjectSchema } from './CampaignPlayerOrderByRelationAggregateInput.schema';
import { CharacterOrderByRelationAggregateInputObjectSchema as CharacterOrderByRelationAggregateInputObjectSchema } from './CharacterOrderByRelationAggregateInput.schema';
import { GameTimeOrderByWithRelationInputObjectSchema as GameTimeOrderByWithRelationInputObjectSchema } from './GameTimeOrderByWithRelationInput.schema';
import { WeatherEntryOrderByWithRelationInputObjectSchema as WeatherEntryOrderByWithRelationInputObjectSchema } from './WeatherEntryOrderByWithRelationInput.schema';
import { HexMapOrderByWithRelationInputObjectSchema as HexMapOrderByWithRelationInputObjectSchema } from './HexMapOrderByWithRelationInput.schema';
import { DiceRollLogOrderByRelationAggregateInputObjectSchema as DiceRollLogOrderByRelationAggregateInputObjectSchema } from './DiceRollLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  gmId: SortOrderSchema.optional(),
  season: SortOrderSchema.optional(),
  weatherEntryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  todaysEvent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gm: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  players: z.lazy(() => CampaignPlayerOrderByRelationAggregateInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterOrderByRelationAggregateInputObjectSchema).optional(),
  gameTime: z.lazy(() => GameTimeOrderByWithRelationInputObjectSchema).optional(),
  weatherEntry: z.lazy(() => WeatherEntryOrderByWithRelationInputObjectSchema).optional(),
  hexMap: z.lazy(() => HexMapOrderByWithRelationInputObjectSchema).optional(),
  diceRolls: z.lazy(() => DiceRollLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CampaignOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CampaignOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignOrderByWithRelationInput>;
export const CampaignOrderByWithRelationInputObjectZodSchema = makeSchema();
