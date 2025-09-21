import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema } from './CampaignUncheckedCreateNestedManyWithoutGmInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutPlayerInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutPlayerInput.schema';
import { CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateNestedManyWithoutUserInput.schema';
import { DiceRollLogUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DiceRollLogUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectZodSchema = makeSchema();
