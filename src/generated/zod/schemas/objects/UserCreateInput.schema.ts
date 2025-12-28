import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { CampaignCreateNestedManyWithoutGmInputObjectSchema as CampaignCreateNestedManyWithoutGmInputObjectSchema } from './CampaignCreateNestedManyWithoutGmInput.schema';
import { CharacterCreateNestedManyWithoutPlayerInputObjectSchema as CharacterCreateNestedManyWithoutPlayerInputObjectSchema } from './CharacterCreateNestedManyWithoutPlayerInput.schema';
import { CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema as CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema } from './CampaignPlayerCreateNestedManyWithoutUserInput.schema';
import { DiceRollLogCreateNestedManyWithoutUserInputObjectSchema as DiceRollLogCreateNestedManyWithoutUserInputObjectSchema } from './DiceRollLogCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignCreateNestedManyWithoutGmInputObjectSchema).optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
