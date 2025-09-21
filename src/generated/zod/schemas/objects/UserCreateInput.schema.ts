import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
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
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema),
  ownedCampaigns: z.lazy(() => CampaignCreateNestedManyWithoutGmInputObjectSchema),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutPlayerInputObjectSchema),
  playerIn: z.lazy(() => CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema),
  diceRollLogs: z.lazy(() => DiceRollLogCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
