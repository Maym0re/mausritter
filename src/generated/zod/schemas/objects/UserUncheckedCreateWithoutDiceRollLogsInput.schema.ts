import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema as CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema } from './CampaignUncheckedCreateNestedManyWithoutGmInput.schema';
import { CharacterUncheckedCreateNestedManyWithoutPlayerInputObjectSchema as CharacterUncheckedCreateNestedManyWithoutPlayerInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutPlayerInput.schema';
import { CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema as CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutDiceRollLogsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutDiceRollLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutDiceRollLogsInput>;
export const UserUncheckedCreateWithoutDiceRollLogsInputObjectZodSchema = makeSchema();
