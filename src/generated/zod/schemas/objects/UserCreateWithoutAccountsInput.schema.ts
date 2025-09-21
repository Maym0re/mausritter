import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { CampaignCreateNestedManyWithoutGmInputObjectSchema } from './CampaignCreateNestedManyWithoutGmInput.schema';
import { CharacterCreateNestedManyWithoutPlayerInputObjectSchema } from './CharacterCreateNestedManyWithoutPlayerInput.schema';
import { CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema } from './CampaignPlayerCreateNestedManyWithoutUserInput.schema';
import { DiceRollLogCreateNestedManyWithoutUserInputObjectSchema } from './DiceRollLogCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignCreateNestedManyWithoutGmInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
