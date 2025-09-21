import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCharactersInputObjectSchema } from './UserCreateNestedOneWithoutCharactersInput.schema';
import { CampaignCreateNestedOneWithoutCharactersInputObjectSchema } from './CampaignCreateNestedOneWithoutCharactersInput.schema';
import { BackgroundCreateNestedOneWithoutCharactersInputObjectSchema } from './BackgroundCreateNestedOneWithoutCharactersInput.schema';
import { BirthsignCreateNestedOneWithoutCharactersInputObjectSchema } from './BirthsignCreateNestedOneWithoutCharactersInput.schema';
import { CoatCreateNestedOneWithoutCharactersInputObjectSchema } from './CoatCreateNestedOneWithoutCharactersInput.schema';
import { ConditionCreateNestedManyWithoutCharactersInputObjectSchema } from './ConditionCreateNestedManyWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  notes: z.string().optional().nullable(),
  str: z.number().int().optional(),
  dex: z.number().int().optional(),
  wil: z.number().int().optional(),
  hp: z.number().int().optional(),
  maxHp: z.number().int().optional(),
  physicalDetail: z.string().optional().nullable(),
  level: z.number().int().optional(),
  xp: z.number().int().optional(),
  grit: z.number().int().optional(),
  pips: z.number().int().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  player: z.lazy(() => UserCreateNestedOneWithoutCharactersInputObjectSchema),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutCharactersInputObjectSchema),
  background: z.lazy(() => BackgroundCreateNestedOneWithoutCharactersInputObjectSchema),
  birthsign: z.lazy(() => BirthsignCreateNestedOneWithoutCharactersInputObjectSchema),
  coat: z.lazy(() => CoatCreateNestedOneWithoutCharactersInputObjectSchema),
  conditions: z.lazy(() => ConditionCreateNestedManyWithoutCharactersInputObjectSchema).optional()
}).strict();
export const CharacterCreateWithoutInventoryInputObjectSchema: z.ZodType<Prisma.CharacterCreateWithoutInventoryInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacterCreateWithoutInventoryInput>;
export const CharacterCreateWithoutInventoryInputObjectZodSchema = makeSchema();
