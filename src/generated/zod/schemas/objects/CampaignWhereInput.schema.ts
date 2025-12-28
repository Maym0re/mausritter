import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumSeasonNameFilterObjectSchema as EnumSeasonNameFilterObjectSchema } from './EnumSeasonNameFilter.schema';
import { SeasonNameSchema } from '../enums/SeasonName.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CampaignPlayerListRelationFilterObjectSchema as CampaignPlayerListRelationFilterObjectSchema } from './CampaignPlayerListRelationFilter.schema';
import { CharacterListRelationFilterObjectSchema as CharacterListRelationFilterObjectSchema } from './CharacterListRelationFilter.schema';
import { GameTimeNullableScalarRelationFilterObjectSchema as GameTimeNullableScalarRelationFilterObjectSchema } from './GameTimeNullableScalarRelationFilter.schema';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema';
import { WeatherEntryNullableScalarRelationFilterObjectSchema as WeatherEntryNullableScalarRelationFilterObjectSchema } from './WeatherEntryNullableScalarRelationFilter.schema';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema';
import { HexMapNullableScalarRelationFilterObjectSchema as HexMapNullableScalarRelationFilterObjectSchema } from './HexMapNullableScalarRelationFilter.schema';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { DiceRollLogListRelationFilterObjectSchema as DiceRollLogListRelationFilterObjectSchema } from './DiceRollLogListRelationFilter.schema'

const campaignwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CampaignWhereInputObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CampaignWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CampaignWhereInputObjectSchema), z.lazy(() => CampaignWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  gmId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  season: z.union([z.lazy(() => EnumSeasonNameFilterObjectSchema), SeasonNameSchema]).optional(),
  weatherEntryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  todaysEvent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  gm: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  players: z.lazy(() => CampaignPlayerListRelationFilterObjectSchema).optional(),
  characters: z.lazy(() => CharacterListRelationFilterObjectSchema).optional(),
  gameTime: z.union([z.lazy(() => GameTimeNullableScalarRelationFilterObjectSchema), z.lazy(() => GameTimeWhereInputObjectSchema)]).optional(),
  weatherEntry: z.union([z.lazy(() => WeatherEntryNullableScalarRelationFilterObjectSchema), z.lazy(() => WeatherEntryWhereInputObjectSchema)]).optional(),
  hexMap: z.union([z.lazy(() => HexMapNullableScalarRelationFilterObjectSchema), z.lazy(() => HexMapWhereInputObjectSchema)]).optional(),
  diceRolls: z.lazy(() => DiceRollLogListRelationFilterObjectSchema).optional()
}).strict();
export const CampaignWhereInputObjectSchema: z.ZodType<Prisma.CampaignWhereInput> = campaignwhereinputSchema as unknown as z.ZodType<Prisma.CampaignWhereInput>;
export const CampaignWhereInputObjectZodSchema = campaignwhereinputSchema;
