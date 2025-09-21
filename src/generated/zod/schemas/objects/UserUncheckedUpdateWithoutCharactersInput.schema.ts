import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CampaignUncheckedUpdateManyWithoutGmNestedInputObjectSchema } from './CampaignUncheckedUpdateManyWithoutGmNestedInput.schema';
import { CampaignPlayerUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CampaignPlayerUncheckedUpdateManyWithoutUserNestedInput.schema';
import { DiceRollLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './DiceRollLogUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  ownedCampaigns: z.lazy(() => CampaignUncheckedUpdateManyWithoutGmNestedInputObjectSchema).optional(),
  playerIn: z.lazy(() => CampaignPlayerUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutCharactersInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutCharactersInput>;
export const UserUncheckedUpdateWithoutCharactersInputObjectZodSchema = makeSchema();
