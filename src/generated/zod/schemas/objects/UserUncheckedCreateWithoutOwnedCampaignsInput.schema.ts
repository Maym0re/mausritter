import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
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
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutOwnedCampaignsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOwnedCampaignsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutOwnedCampaignsInput>;
export const UserUncheckedCreateWithoutOwnedCampaignsInputObjectZodSchema = makeSchema();
