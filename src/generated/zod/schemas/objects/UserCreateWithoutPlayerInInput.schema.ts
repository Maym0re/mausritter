import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { CampaignCreateNestedManyWithoutGmInputObjectSchema } from './CampaignCreateNestedManyWithoutGmInput.schema';
import { CharacterCreateNestedManyWithoutPlayerInputObjectSchema } from './CharacterCreateNestedManyWithoutPlayerInput.schema';
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
  characters: z.lazy(() => CharacterCreateNestedManyWithoutPlayerInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutPlayerInInput>;
export const UserCreateWithoutPlayerInInputObjectZodSchema = makeSchema();
