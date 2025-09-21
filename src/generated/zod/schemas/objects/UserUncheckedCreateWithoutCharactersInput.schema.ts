import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema } from './CampaignUncheckedCreateNestedManyWithoutGmInput.schema';
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
  ownedCampaigns: z.lazy(() => CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutCharactersInput>;
export const UserUncheckedCreateWithoutCharactersInputObjectZodSchema = makeSchema();
