import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CampaignUncheckedUpdateManyWithoutGmNestedInputObjectSchema } from './CampaignUncheckedUpdateManyWithoutGmNestedInput.schema';
import { CharacterUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema } from './CharacterUncheckedUpdateManyWithoutPlayerNestedInput.schema';
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
  characters: z.lazy(() => CharacterUncheckedUpdateManyWithoutPlayerNestedInputObjectSchema).optional(),
  diceRollLogs: z.lazy(() => DiceRollLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutPlayerInInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPlayerInInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutPlayerInInput>;
export const UserUncheckedUpdateWithoutPlayerInInputObjectZodSchema = makeSchema();
