import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { CampaignUpdateManyWithoutGmNestedInputObjectSchema } from './CampaignUpdateManyWithoutGmNestedInput.schema';
import { CampaignPlayerUpdateManyWithoutUserNestedInputObjectSchema } from './CampaignPlayerUpdateManyWithoutUserNestedInput.schema';
import { DiceRollLogUpdateManyWithoutUserNestedInputObjectSchema } from './DiceRollLogUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignUpdateManyWithoutGmNestedInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutCharactersInput>;
export const UserUpdateWithoutCharactersInputObjectZodSchema = makeSchema();
