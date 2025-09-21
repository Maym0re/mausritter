import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { CampaignCreateNestedManyWithoutGmInputObjectSchema } from './CampaignCreateNestedManyWithoutGmInput.schema';
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
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignCreateNestedManyWithoutGmInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutCharactersInput>;
export const UserCreateWithoutCharactersInputObjectZodSchema = makeSchema();
